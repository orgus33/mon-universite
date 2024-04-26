const MatiereModal = ({ isOpen, handleClose, handleSubmit, matiereData, setMatiereData }) => {
    if (!isOpen) return null;

    const handleChange = (e) => {
        setMatiereData({ ...matiereData, [e.target.name]: e.target.value });
    };

    return (
        <div style={{ position: 'fixed', top: '20%', left: '30%', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(matiereData);
            }}>
                <div>
                    <label>Code:</label>
                    <input type="text" name="CodeMat" value={matiereData.CodeMat} onChange={handleChange} required />
                </div>
                <div>
                    <label>Titre:</label>
                    <input type="text" name="LibelleMat" value={matiereData.LibelleMat} onChange={handleChange} required />
                </div>
                <div>
                    <label>Coefficient:</label>
                    <input type="number" name="CoeffMat" value={matiereData.CoeffMat} onChange={handleChange} required />
                </div>
                <button type="submit">Save</button>
                <button type="button" onClick={handleClose}>Cancel</button>
            </form>
        </div>
    );
}

export default MatiereModal;
