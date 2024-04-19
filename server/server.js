const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello server...');
});


const mongoURI = 'mongodb://localhost:27017/mon-universiteDB';
mongoose.connect(mongoURI).then(() => console.log("successful connexion DB"));

const Schema = mongoose.Schema;
let EtudSchema = new Schema({
    NumEtudiant: String,
    Nom: String,
    Prenom: String,
    datenEt: Date
}, {versionKey: false});

let Etud = mongoose.model("etudiants", EtudSchema);

app.get("/etudiants", async (req, res) => {
    try {
        const results = await Etud.find({});
        res.send(results);
    } catch (err) {
        res.status(500).send({error: 'An error occurred while fetching students'});
    }
});

app.post("/etudiants", async (req, res) => {
    let newEtud = new Etud(req.body);
    try {
        await newEtud.save();
        res.status(200).send({message: `${newEtud.nom} is succussffully added`});
    } catch (err) {
        res.status(400).send({error: `error adding newEtud ${err}`})
    }
});

app.put("/etudiants/:id", async (req, res) => {
    try {
        const etud = await Etud.findByIdAndUpdate(req.params.id, req.body);
        await etud.save();
        res.status(200).send({message: `${etud.nom} is succussffully updated`});
    } catch (err) {
        res.status(400).send({
            error: `error updating etudiant ${err}`
        })
    }
});

app.delete("/etudiants/:id", async (req, res) => {
    try {
        const etud = await Etud.findByIdAndDelete(req.params.id);
        res.status(200).send({message: `${etud.nom} is succussffully deleted`});
    } catch (err) {
        res.status(400).send({error: `error deleting etudiant ${err}`})
    }
});


app.listen(port, () => {
    console.log("Server is running")
})


//
//
// const mongoose = require('mongoose');
// const cors = require('cors');
//
//
//
//
// app.use(express.json());
// app.use(cors());
//
// // Définition des modèles Mongoose
// const Etudiant = mongoose.model('Etudiant', new mongoose.Schema({
//     nom: String,
//     prenom: String,
//     dateNaissance: Date,
//     programme: String
// }));
//
// const Enseignant = mongoose.model('Enseignant', new mongoose.Schema({
//     nom: String,
//     prenom: String,
//     specialite: String,
//     email: String
// }));
//
// const Matiere = mongoose.model('Matiere', new mongoose.Schema({
//     code: String,
//     titre: String,
//     coefficient: Number
// }));
//
// const Note = mongoose.model('Note', new mongoose.Schema({
//     etudiantNom: String,
//     matiere: String,
//     note: Number,
//     date: Date
// }));
//
// // Routes pour les étudiants
// app.get('/api/etudiants', async (req, res) => {
//     const etudiants = await Etudiant.find();
//     res.json(etudiants);
// });
//
// app.post('/api/etudiants', async (req, res) => {
//     const nouvelEtudiant = new Etudiant(req.body);
//     await nouvelEtudiant.save();
//     res.send(nouvelEtudiant);
// });
//
// app.put('/api/etudiants/:id', async (req, res) => {
//     const etudiant = await Etudiant.findByIdAndUpdate(req.params.id, req.body);
//     res.send(etudiant);
// });
//
// app.delete('/api/etudiants/:id', async (req, res) => {
//     await Etudiant.findByIdAndDelete(req.params.id);
//     res.send({ message: 'Etudiant supprimé' });
// });
//
// // Routes pour les enseignants
// app.get('/api/enseignants', async (req, res) => {
//     const enseignants = await Enseignant.find();
//     res.json(enseignants);
// });
//
// app.post('/api/enseignants', async (req, res) => {
//     const nouvelEnseignant = new Enseignant(req.body);
//     await nouvelEnseignant.save();
//     res.send(nouvelEnseignant);
// });
//
// app.put('/api/enseignants/:id', async (req, res) => {
//     const enseignant = await Enseignant.findByIdAndUpdate(req.params.id, req.body);
//     res.send(enseignant);
// });
//
// app.delete('/api/enseignants/:id', async (req, res) => {
//     await Enseignant.findByIdAndDelete(req.params.id);
//     res.send({ message: 'Enseignant supprimé' });
// });
//
// // Routes pour les matières
// app.get('/api/matieres', async (req, res) => {
//     const matieres = await Matiere.find();
//     res.json(matieres);
// });
//
// app.post('/api/matieres', async (req, res) => {
//     const nouvelleMatiere = new Matiere(req.body);
//     await nouvelleMatiere.save();
//     res.send(nouvelleMatiere);
// });
//
// app.put('/api/matieres/:id', async (req, res) => {
//     const matiere = await Matiere.findByIdAndUpdate(req.params.id, req.body);
//     res.send(matiere);
// });
//
// app.delete('/api/matieres/:id', async (req, res) => {
//     await Matiere.findByIdAndDelete(req.params.id);
//     res.send({ message: 'Matière supprimée' });
// });
//
// // Routes pour les notes
// app.get('/api/notes', async (req, res) => {
//     const notes = await Note.find();
//     res.json(notes);
// });
//
// app.post('/api/notes', async (req, res) => {
//     const nouvelleNote = new Note(req.body);
//     await nouvelleNote.save();
//     res.send(nouvelleNote);
// });
//
// app.put('/api/notes/:id', async (req, res) => {
//     const note = await Note.findByIdAndUpdate(req.params.id, req.body);
//     res.send(note);
// });
//
// app.delete('/api/notes/:id', async (req, res) => {
//     await Note.findByIdAndDelete(req.params.id);
//     res.send({ message: 'Note supprimée' });
// });
//
// // Démarrage du serveur
// const port = 4000;
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
