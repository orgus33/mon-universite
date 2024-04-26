const NoteModal = ({ isOpen, handleClose, handleSubmit, noteData, setNoteData }) => {
    if (!isOpen) return null;

    const handleChange = (e) => {
        setNoteData({ ...noteData, [e.target.name]: e.target.value });
    };

    return (
        <div style={{ position: 'fixed', top: '20%', left: '30%', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(noteData)
                handleSubmit(noteData);
            }}>
                <div>
                    <label>Étudiant:</label>
                    <input type="text" name="NEtudiant" value={noteData.NEtudiant} onChange={handleChange} required />
                </div>
                <div>
                    <label>Matière:</label>
                    <input type="text" name="CodeMat" value={noteData.CodeMat} onChange={handleChange} required />
                </div>
                <div>
                    <label>Note:</label>
                    <input type="number" name="Note" value={noteData.Note} onChange={handleChange} required />
                </div>
                <div>c
                    <label>Date:</label>
                    <input type="date" name="Date" value={noteData.Date} onChange={handleChange} required />
                </div>
                <button type="submit">Save</button>
                <button type="button" onClick={handleClose}>Cancel</button>
            </form>
        </div>
    );
}

export default NoteModal;