import React from 'react';
import { Link } from 'react-router-dom';

function Accueil() {
    const styles = {
        accueil: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            color: '#333',
            lineHeight: 1.6,
        },
        header: {
            textAlign: 'center',
            marginBottom: '20px',
        },
        logo: {
            width: '150px',
            marginBottom: '10px',
        },
        introduction: {
            marginBottom: '20px',
            textAlign: 'justify',
        },
        contactInfo: {
            margin: '5px 0',
        },
        navigation: {
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '18px',
        },
        navLink: {
            color: '#0056b3',
            textDecoration: 'none',
            padding: '0 10px',
        }
    };

    return (
        <div style={styles.accueil}>
            <div style={styles.header}>
                <img src="https://console.studizz.fr/uploads/medias/59ee025775549a751a2b23c8/blason-Bleu_png" alt="Logo iut" style={styles.logo}/>
                <h1>Bienvenue à l'Université</h1>
            </div>
            <p style={styles.introduction}>
                Rendre les étudiants opérationnels dès la sortie de l'IUT avec "en poche" un diplôme Bac+3, permettre l'adaptation rapide des diplômés dans l'environnement technique, économique et social de l'entreprise, ce sont les objectifs des six départements de l'IUT.
                Découvrez les offres de formation en cycle initial ou en Alternance, en Année Spéciale ou en Licence Professionnelle et le nouveau Diplôme du Bachelor Universitaire de Technologie.
            </p>
            <div style={styles.contactInfo}>
                <p>Mail: secretariat-info@iut-amiens.fr</p>
                <p>Tél. +33(0)3.22.53.40.40</p>
                <p>Fax: +33 (0)3 22 45 46 47</p>
            </div>
            <nav style={styles.navigation}>
                <Link to="/etudiants" style={styles.navLink}>Étudiants</Link> |
                <Link to="/enseignants" style={styles.navLink}>Enseignants</Link> |
                <Link to="/matiere" style={styles.navLink}>Matière</Link> |
                <Link to="/note" style={styles.navLink}>Note</Link>
            </nav>
        </div>
    );
}

export default Accueil;
