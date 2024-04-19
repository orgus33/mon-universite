import axios from 'axios';

const API_URL = 'http://localhost:4000/api/matieres'; // Assurez-vous que l'URL est correcte

// Obtenir toutes les matières
export const getAllMatieres = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching subjects", error);
        throw error;
    }
}

// Ajouter une nouvelle matière
export const addMatiere = async (matiere) => {
    try {
        const response = await axios.post(API_URL, matiere);
        return response.data;
    } catch (error) {
        console.error("Error adding subject", error);
        throw error;
    }
}

// Mettre à jour une matière
export const updateMatiere = async (id, matiere) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, matiere);
        return response.data;
    } catch (error) {
        console.error("Error updating subject", error);
        throw error;
    }
}

// Supprimer une matière
export const deleteMatiere = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting subject", error);
        throw error;
    }
}
