import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import {add, getAll, remove} from "../services/operationsEtuds";

function Etudiants() {
    const [etudiants, setEtudiants] = useState([]);

    useEffect(() => {
        fetchEtudiants();
    }, []);

    useEffect(() => {
        console.log(etudiants)
    }, [etudiants]);

    const fetchEtudiants = async () => {
        await getAll((res) => {
            setEtudiants(res.data)
        })
    };

    const handleAdd = async () => {

        const newStudent = {
            NumEtudiant: etudiants.length !== 0 ? (parseInt([...etudiants].pop().NumEtudiant) + 1) : 1,
            Nom: 'Nouveau',
            Prenom: 'Étudiant',
        };
        add(newStudent, () => {
            fetchEtudiants()
        })
    };
    //
    // const handleEdit = async (id) => {
    //     const studentToUpdate = etudiants.find(e => e.id === id);
    //     const updatedData = {...studentToUpdate, nom: studentToUpdate.nom + ' Modifié'};
    //     try {
    //         const updated = await updateEtudiant(id, updatedData);
    //         const index = etudiants.findIndex(e => e.id === id);
    //         const updatedEtudiants = [...etudiants];
    //         updatedEtudiants[index] = updated;
    //         setEtudiants(updatedEtudiants);
    //     } catch (error) {
    //         console.error('Failed to update student', error);
    //     }
    // };
    //
    // const handleDelete = async (id) => {
    //     try {
    //         await deleteEtudiant(id);
    //         setEtudiants(etudiants.filter(etudiant => etudiant.id !== id));
    //     } catch (error) {
    //         console.error('Failed to delete student', error);
    //     }
    // };

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
                    <th className="th">Nom</th>
                    <th className="th">Prénom</th>
                    <th className="th">Date de Naissance</th>
                    <th className="th">Actions</th>
                </tr>
                </thead>
                <tbody>
                {etudiants.map((etudiant, index) => (
                    <tr key={index}>
                        <td className="td">{etudiant.Nom}</td>
                        <td className="td">{etudiant["Prénom"]}</td>
                        <td className="td">{new Date(etudiant.datenEt).toLocaleDateString('fr-FR')}</td>
                        <td className="td">
                            <button className="button">Modifier</button>
                            <button onClick={() => {
                                remove(etudiant._id, ()=> {
                                    fetchEtudiants()
                                })
                            }} className="button">Supprimer</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Etudiants;
