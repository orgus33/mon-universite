import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import { getAllMatieres, addMatiere, updateMatiere, removeMatiere } from '../services/operationMatieres';
import MatiereModal from "../modals/MatiereModal";

function Matiere() {
    const [matieres, setMatieres] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentMatiere, setCurrentMatiere] = useState(null);

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
        setCurrentMatiere({
            CodeMat: "",
            CoeffMat: 0,
            LibelleMat: ""
        })
        setIsModalOpen(true)
    };

    const handleEdit = (matiere) => {
        console.log(matiere)
        setCurrentMatiere(matiere);
        setIsModalOpen(true)
    }

    const handleDelete = (id) => {
        removeMatiere(id, () => {
            fetchMatieres();
        });
    };

    const handleSubmit = (matiere) => {
        if (matiere._id) {
            updateMatiere(matiere._id, matiere, () => {
                fetchMatieres();
            });
        } else {
            addMatiere(matiere, () => {
                fetchMatieres();
            });
        }
        setIsModalOpen(false);
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
                            <button onClick={() => handleEdit(matiere)} className="button">Modifier</button>
                            <button onClick={() => handleDelete(matiere._id)} className="button">Supprimer</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <MatiereModal
                isOpen={isModalOpen}
                handleClose={() => setIsModalOpen(false)}
                handleSubmit={handleSubmit}
                matiereData={currentMatiere}
                setMatiereData={setCurrentMatiere}
            />
        </div>
    );
}

export default Matiere;