import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import { getAllEtud, removeEtud, updateEtud, addEtud} from "../services/operationsEtuds";
import EtudiantModal from "../modals/EtudiantModal";


function Etudiants() {
    const [etudiants, setEtudiants] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEtudiant, setCurrentEtudiant] = useState(null);

    useEffect(() => {
        fetchEtudiants();
    }, []);

    useEffect(() => {
        console.log(etudiants)
    }, [etudiants]);

    const fetchEtudiants = async () => {
        await getAllEtud((res) => {
            setEtudiants(res.data)
        })
    };

    const handleAdd = async () => {
        setCurrentEtudiant({
            NumEtudiant: '',
            Nom: '',
            Prenom: '',
            datenEt: new Date().toISOString().split('T')[0]
        });
        setIsModalOpen(true);
    };

   const handleEdit = (etudiant) => {
       setCurrentEtudiant({
           _id: etudiant._id,
           NumEtudiant: etudiant.NumEtudiant,
           Prenom: etudiant.Prenom,
           Nom: etudiant.Nom,
           datenEt: new Date(etudiant.datenEt).toISOString().split('T')[0]
       })
       setIsModalOpen(true);
   }

   const handleDelete = (etudiant) => {
       removeEtud(etudiant._id, ()=> {
           fetchEtudiants()
       })
   }

    const handleSubmit = (etudiant) => {
        if (etudiant._id) {
            updateEtud(etudiant._id, etudiant, () => {
                fetchEtudiants();
            });
        } else {
            addEtud(etudiant, () => {
                fetchEtudiants();
            });
        }
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Liste des Étudiants</h1>
                <button onClick={handleAdd} className="button">Ajouter Étudiant</button>
            </div>
            <nav>
                <Link className="nav-link" to="/">Accueil</Link>
                <Link className="nav-link" to="/etudiants">Étudiants</Link>
                <Link className="nav-link" to="/enseignants">Enseignants</Link>
                <Link className="nav-link" to="/matiere">Matière</Link>
                <Link className="nav-link" to="/note">Notes</Link>
            </nav>
            <table className="table">
                <thead>
                <tr>
                    <th className="th">Numéro</th>
                    <th className="th">Prénom</th>
                    <th className="th">Nom</th>
                    <th className="th">Date de Naissance</th>
                    <th className="th">Actions</th>
                </tr>
                </thead>
                <tbody>
                {etudiants.map((etudiant, index) => (
                    <tr key={index}>
                        <td className="td">{etudiant.NumEtudiant}</td>
                        <td className="td">{etudiant.Prenom }</td>
                        <td className="td">{etudiant.Nom }</td>
                        <td className="td">{new Date(etudiant.datenEt).toLocaleDateString('fr-FR')}</td>
                        <td className="td">
                            <button onClick={() => handleEdit(etudiant)} className="button">Modifier</button>
                            <button onClick={() => handleDelete(etudiant)} className="button">Supprimer</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <EtudiantModal
                isOpen={isModalOpen}
                handleClose={() => setIsModalOpen(false)}
                handleSubmit={handleSubmit}
                etudiantData={currentEtudiant}
                setEtudiantData={setCurrentEtudiant}
            />
        </div>
    );
}

export default Etudiants;
