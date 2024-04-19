import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Enseignants() {
    const enseignants = [
        { id: 1, nom: 'Dupont', prenom: 'Jacques', specialite: 'Mathématiques', email: 'j.dupont@univ.edu' },
        { id: 2, nom: 'Lambert', prenom: 'Christine', specialite: 'Histoire', email: 'c.lambert@univ.edu' },
        { id: 3, nom: 'Roux', prenom: 'Émile', specialite: 'Physique', email: 'e.roux@univ.edu' }
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
                    <th className="th">Spécialité</th>
                    <th className="th">Email</th>
                    <th className="th">Actions</th>
                </tr>
                </thead>
                <tbody>
                {enseignants.map(enseignant => (
                    <tr key={enseignant.id}>
                        <td className="td">{enseignant.nom}</td>
                        <td className="td">{enseignant.prenom}</td>
                        <td className="td">{enseignant.specialite}</td>
                        <td className="td">{enseignant.email}</td>
                        <td className="td">
                            <button onClick={() => handleEdit(enseignant.id)} className="button">Modifier</button>
                            <button onClick={() => handleDelete(enseignant.id)} className="button">Supprimer</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Enseignants;
