import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import { getAllNotes, addNote, removeNote } from '../services/operationNotes.js'; // Ensure the path is correctly set

function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        await getAllNotes((res) => {
            if (res.status === 200) {
                console.log(res.data);
                setNotes(res.data);
            } else {
                console.error('Failed to fetch notes', res.error);
            }
        });
    };

    const handleAdd = async () => {
        const newNote = {
            etudiantNom: 'Nouvel Étudiant',
            matiere: 'Nouvelle Matière',
            note: 10,
            date: new Date()
        };
        addNote(newNote, () => {
            fetchNotes();
        });
    };

    const handleDelete = (id) => {
        removeNote(id, () => {
            fetchNotes();
        });
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Liste des Notes</h1>
                <button onClick={handleAdd} className="button">Ajouter Note</button>
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
                    <th className="th">Étudiant</th>
                    <th className="th">Matière</th>
                    <th className="th">Note</th>
                    <th className="th">Date</th>
                    <th className="th">Actions</th>
                </tr>
                </thead>
                <tbody>
                {notes.map(note => (
                    <tr key={note._id}>
                        <td className="td">{note["Prénom"] + note.Nom}</td>
                        <td className="td">{note.matiere}</td>
                        <td className="td">{note.note}</td>
                        <td className="td">{new Date(note.date).toLocaleDateString('fr-FR')}</td>
                        <td className="td">
                            <button className="button">Modifier</button>
                            <button onClick={() => handleDelete(note._id)} className="button">Supprimer</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Notes;
