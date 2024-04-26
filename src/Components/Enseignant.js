import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import { getAllEnseignants, addEnseignant, removeEnseignant } from '../services/operationEnseignants'; // Adjust import paths as necessary

function Enseignants() {
    const [enseignants, setEnseignants] = useState([]);

    useEffect(() => {
        fetchEnseignants();
    }, []);

    const fetchEnseignants = async () => {
        await getAllEnseignants((res) => {
            if (res.status === 200) {
                console.log(res.data);
                setEnseignants(res.data);
            } else {
                console.error('Failed to fetch enseignants', res.error);
            }
        });
    };

    const handleAdd = async () => {
        const newEnseignant = {
            nom: 'Nouveau',
            prenom: 'Enseignant',
            specialite: 'Nouvelle Spécialité',
            email: 'nouveau.enseignant@univ.edu'
        };
        addEnseignant(newEnseignant, () => {
            fetchEnseignants();
        });
    };

    const handleDelete = (id) => {
        removeEnseignant(id, () => {
            fetchEnseignants();
        });
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Liste des Enseignants</h1>
                <button onClick={handleAdd} className="button">Ajouter Enseignant</button>
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
                    <th className="th">Nom</th>
                    <th className="th">Prénom</th>
                    <th className="th">Enseignement</th>
                    <th className="th">Matiere</th>
                    <th className="th">Actions</th>
                </tr>
                </thead>
                <tbody>
                {enseignants.map(enseignant => (
                    <tr key={enseignant._id}>
                        <td className="td">{enseignant.NomEns}</td>
                        <td className="td">{enseignant.PrenomEns}</td>
                        <td className="td">{enseignant.GradeEns}</td>
                        <td className="td">{enseignant.CodeMat}</td>
                        <td className="td">
                            <button className="button">Modifier</button>
                            <button onClick={() => handleDelete(enseignant._id)} className="button">Supprimer</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Enseignants;
