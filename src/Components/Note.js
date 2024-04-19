import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Notes() {
    const notes = [
        { id: 1, etudiantNom: 'Jean Durand', matiere: 'Mathématiques', note: 15, date: '2023-10-01' },
        { id: 2, etudiantNom: 'Marie Petit', matiere: 'Informatique', note: 18, date: '2023-10-01' },
        { id: 3, etudiantNom: 'Marc Leroy', matiere: 'Physique', note: 12, date: '2023-10-01' }
    ];

    const handleAdd = () => {
        console.log('Ajouter Note');
    };

    const handleEdit = (id) => {
        console.log('Modifier Note', id);
    };

    const handleDelete = (id) => {
        console.log('Supprimer Note', id);
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
                    <tr key={note.id}>
                        <td className="td">{note.etudiantNom}</td>
                        <td className="td">{note.matiere}</td>
                        <td className="td">{note.note}</td>
                        <td className="td">{note.date}</td>
                        <td className="td">
                            <button onClick={() => handleEdit(note.id)} className="button">Modifier</button>
                            <button onClick={() => handleDelete(note.id)} className="button">Supprimer</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Notes;
