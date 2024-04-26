import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import { getAllMatieres, addMatiere, updateMatiere, removeMatiere } from '../services/operationMatieres'; // Adjust import paths as necessary

function Matiere() {
    const [matieres, setMatieres] = useState([]);

    useEffect(() => {
        fetchMatieres();
    }, []);

    const fetchMatieres = async () => {
        await getAllMatieres((res) => {
            console.log(res);
            setMatieres(res.data)
        })
    };

    const handleAdd = async () => {
        const newMatiere = {
            code: 'NEW101',
            titre: 'Nouvelle Matière',
            coefficient: 1.0
        };
        addMatiere(newMatiere, () => {
            fetchMatieres();
        });
    };

    const handleDelete = (id) => {
        removeMatiere(id, () => {
            fetchMatieres();
        });
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Liste des Matières</h1>
                <button onClick={handleAdd} className="button">Ajouter Matière</button>
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
                    <th className="th">Code</th>
                    <th className="th">Titre</th>
                    <th className="th">Coefficient</th>
                    <th className="th">Actions</th>
                </tr>
                </thead>
                <tbody>
                {matieres.map(matiere => (
                    <tr key={matiere._id}>
                        <td className="td">{matiere.CodeMat}</td>
                        <td className="td">{matiere.LibelleMat}</td>
                        <td className="td">{matiere.CoeffMat}</td>
                        <td className="td">
                            <button className="button">Modifier</button>
                            <button onClick={() => handleDelete(matiere._id)} className="button">Supprimer</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Matiere;