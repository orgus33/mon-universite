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

let NoteSchema = new Schema({
    CodeMat: String,
    Date: Date,
    NEtudiant: String,
    Note: Number
}, {versionKey: false})

let MatiereSchema = new Schema({
    CodeMat: String,
    CoeffMat: Number,
    LibelleMat: String
}, {versionKey: false})

let EnseignantSchema = new Schema({
    CodeEns: String,
    CodeMat: String,
    GradeEns: String,
    NomEns: String,
    PrenomEns: String
}, {versionKey: false})

let Etud = mongoose.model("etudiants", EtudSchema);
let Note = mongoose.model("Note", NoteSchema)
let Matiere = mongoose.model("Matiere", MatiereSchema)
let Enseignant = mongoose.model("Enseignant", EnseignantSchema)

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



app.get("/notes", async (req, res) => {
    try {
        const results = await Note.find({});
        res.send(results);
    } catch (err) {
        res.status(500).send({error: 'An error occurred while fetching notes'});
    }
});

app.post("/notes", async (req, res) => {
    let newNote = new Note(req.body);
    try {
        await newNote.save();
        res.status(200).send({message: `${newNote.nom} is succussffully added`});
    } catch (err) {
        res.status(400).send({error: `error adding newNote ${err}`})
    }
});

app.put("/notes/:id", async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body);
        await note.save();
        res.status(200).send({message: `${note.nom} is succussffully updated`});
    } catch (err) {
        res.status(400).send({
            error: `error updating note ${err}`
        })
    }
});

app.delete("/notes/:id", async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        res.status(200).send({message: `${note.nom} is succussffully deleted`});
    } catch (err) {
        res.status(400).send({error: `error deleting note ${err}`})
    }
});

app.get("/matieres", async (req, res) => {
    try {
        const results = await Matiere.find({});
        res.send(results);
    } catch (err) {
        res.status(500).send({error: 'An error occurred while fetching subjects'});
    }
});

app.post("/matieres", async (req, res) => {
    let newMatiere = new Matiere(req.body);
    try {
        await newMatiere.save();
        res.status(200).send({message: `${newMatiere.nom} is successfully added`});
    } catch (err) {
        res.status(400).send({error: `error adding newMatiere ${err}`})
    }
});

app.put("/matieres/:id", async (req, res) => {
    try {
        const matiere = await Matiere.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send({message: `${matiere.nom} is successfully updated`});
    } catch (err) {
        res.status(400).send({error: `error updating matiere ${err}`})
    }
});

app.delete("/matieres/:id", async (req, res) => {
    try {
        const matiere = await Matiere.findByIdAndDelete(req.params.id);
        res.status(200).send({message: `${matiere.nom} is successfully deleted`});
    } catch (err) {
        res.status(400).send({error: `error deleting matiere ${err}`})
    }
});

app.get("/enseignants", async (req, res) => {
    try {
        const results = await Enseignant.find({});
        res.send(results);
    } catch (err) {
        res.status(500).send({error: 'An error occurred while fetching teachers'});
    }
});

app.post("/enseignants", async (req, res) => {
    let newEnseignant = new Enseignant(req.body);
    try {
        await newEnseignant.save();
        res.status(200).send({message: `${newEnseignant.nom} is successfully added`});
    } catch (err) {
        res.status(400).send({error: `error adding newEnseignant ${err}`})
    }
});

app.put("/enseignants/:id", async (req, res) => {
    try {
        const enseignant = await Enseignant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send({message: `${enseignant.nom} is successfully updated`});
    } catch (err) {
        res.status(400).send({error: `error updating enseignant ${err}`})
    }
});

app.delete("/enseignants/:id", async (req, res) => {
    try {
        const enseignant = await Enseignant.findByIdAndDelete(req.params.id);
        res.status(200).send({message: `${enseignant.nom} is successfully deleted`});
    } catch (err) {
        res.status(400).send({error: `error deleting enseignant ${err}`})
    }
});


app.listen(port, () => {
    console.log("Server is running")
})
