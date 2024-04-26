const EnseignantModal = ({ isOpen, handleClose, handleSubmit, enseignantData, setEnseignantData }) => {
    if (!isOpen) return null;

    const handleChange = (e) => {
        setEnseignantData({ ...enseignantData, [e.target.name]: e.target.value });
    };

    return (
        <div style={{ position: 'fixed', top: '20%', left: '30%', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(enseignantData);
            }}>
                <div>
                    <label>Code:</label>
                    <input type="text" name="CodeEns" value={enseignantData.CodeEns} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Nom:</label>
                    <input type="text" name="NomEns" value={enseignantData.NomEns} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Prénom:</label>
                    <input type="text" name="PrenomEns" value={enseignantData.PrenomEns} onChange={handleChange}
                           required/>
                </div>
                <div>
                    <label>Spécialité:</label>
                    <input type="text" name="GradeEns" value={enseignantData.GradeEns} onChange={handleChange}
                           required/>
                </div>
                <div>
                    <label>Matière:</label>
                    <input type="text" name="CodeMat" value={enseignantData.CodeMat} onChange={handleChange}
                           required/>
                </div>
                <button type="submit">Save</button>
                <button type="button" onClick={handleClose}>Cancel</button>
            </form>
        </div>
    );
}

export default EnseignantModal;
