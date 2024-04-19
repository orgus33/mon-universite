import axios from 'axios';

const API_URL = 'http://localhost:4000/api/enseignants'; // Assurez-vous que l'URL est correcte

// Obtenir tous les enseignants
export const getAllEnseignants = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching teachers", error);
        throw error;
    }
}

// Ajouter un nouvel enseignant
export const addEnseignant = async (enseignant) => {
    try {
        const response = await axios.post(API_URL, enseignant);
        return response.data;
    } catch (error) {
        console.error("Error adding teacher", error);
        throw error;
    }
}

// Mettre à jour un enseignant
export const updateEnseignant = async (id, enseignant) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, enseignant);
        return response.data;
    } catch (error) {
        console.error("Error updating teacher", error);
        throw error;
    }
}

// Supprimer un enseignant
export const deleteEnseignant = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting teacher", error);
        throw error;
    }
}

