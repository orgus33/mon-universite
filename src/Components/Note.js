import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import { getAllNotes, addNote, removeNote, updateNote } from '../services/operationNotes.js';
import NoteModal from "../modals/NoteModal";

function Notes() {
    const [notes, setNotes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentNote, setCurrentNote] = useState(null);

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
        setCurrentNote({
            NumEtudiant: '',
            CodeMat: '',
            Note: '',
            Date: new Date().toISOString().split('T')[0]
        })
        setIsModalOpen(true);
    };

    const handleEdit = (note) => {
        setCurrentNote({
            _id: note._id,
            NumEtudiant: note.NumEtudiant,
            CodeMat: note.CodeMat,
            Note: note.Note,
            Date: new Date(note.Date).toISOString().split('T')[0]
        });
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        removeNote(id, () => {
            fetchNotes();
        });
    };

    const handleSubmit = (note) => {
        if (note._id) {
            updateNote(note._id, note, () => {
                fetchNotes();
            });
        } else {
            addNote(note, () => {
                fetchNotes();
            });
        }
        setIsModalOpen(false);
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
                        <td className="td">{note.NumEtudiant}</td>
                        <td className="td">{note.CodeMat}</td>
                        <td className="td">{note.Note}</td>
                        <td className="td">{new Date(note.Date).toLocaleDateString('fr-FR')}</td>
                        <td className="td">
                            <button onClick={() => handleEdit(note)} className="button">Modifier</button>
                            <button onClick={() => handleDelete(note._id)} className="button">Supprimer</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <NoteModal
                isOpen={isModalOpen}
                handleClose={() => setIsModalOpen(false)}
                handleSubmit={handleSubmit}
                noteData={currentNote}
                setNoteData={setCurrentNote}
            />
        </div>
    );
}

export default Notes;
