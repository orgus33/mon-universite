import axios from 'axios';

const API_URL = 'http://localhost:4000/api/notes'; // Assurez-vous que l'URL est correcte

// Obtenir toutes les notes
export const getAllNotes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching notes", error);
        throw error;
    }
}

// Ajouter une nouvelle note
export const addNote = async (note) => {
    try {
        const response = await axios.post(API_URL, note);
        return response.data;
    } catch (error) {
        console.error("Error adding note", error);
        throw error;
    }
}

// Mettre à jour une note
export const updateNote = async (id, note) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, note);
        return response.data;
    } catch (error) {
        console.error("Error updating note", error);
        throw error;
    }
}

// Supprimer une note
export const deleteNote = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting note", error);
        throw error;
    }
}
