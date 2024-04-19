import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Matiere() {
    const matieres = [
        { id: 1, code: 'INFO101', titre: 'Introduction à l\'informatique', coefficient: 1.5 },
        { id: 2, code: 'MATH202', titre: 'Algèbre linéaire', coefficient: 2.0 },
        { id: 3, code: 'PHYS303', titre: 'Mécanique classique', coefficient: 2.0 }
    ];

    const handleAdd = () => {
        console.log('Ajouter');
    };

    const handleEdit = (id) => {
        console.log('Modifier', id);
    };

    const handleDelete = (id) => {
        console.log('Supprimer', id);
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
                    <tr key={matiere.id}>
                        <td className="td">{matiere.code}</td>
                        <td className="td">{matiere.titre}</td>
                        <td className="td">{matiere.coefficient}</td>
                        <td className="td">
                            <button onClick={() => handleEdit(matiere.id)} className="button">Modifier</button>
                            <button onClick={() => handleDelete(matiere.id)} className="button">Supprimer</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Matiere;
