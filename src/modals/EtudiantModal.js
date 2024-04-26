const EtudiantModal = ({ isOpen, handleClose, handleSubmit, etudiantData, setEtudiantData }) => {
    if (!isOpen) return null;

    const handleChange = (e) => {
        setEtudiantData({ ...etudiantData, [e.target.name]: e.target.value });
    };

    return (
        <div style={{ position: 'fixed', top: '20%', left: '30%', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(etudiantData);
            }}>
                <div>
                    <label>Nom:</label>
                    <input type="text" name="Nom" value={etudiantData.Nom} onChange={handleChange} required />
                </div>
                <div>
                    <label>Prénom:</label>
                    <input type="text" name="Prenom" value={etudiantData.Prenom} onChange={handleChange} required />
                </div>
                <div>
                    <label>Numéro d'Étudiant:</label>
                    <input type="text" name="NumEtudiant" value={etudiantData.NumEtudiant} onChange={handleChange} required />
                </div>
                <div>
                    <label>Date de Naissance:</label>
                    <input type="date" name="datenEt" value={etudiantData.datenEt} onChange={handleChange} required />
                </div>
                <button type="submit">Save</button>
                <button type="button" onClick={handleClose}>Cancel</button>
            </form>
        </div>
    );
}

export default EtudiantModal;
