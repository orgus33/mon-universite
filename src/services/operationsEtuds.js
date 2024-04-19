import axios from 'axios';

export const getAll = (callback) => {
    axios.get('http://localhost:4000/etudiants ').then((res) => callback(res))
}

export const add = (etud, callback) => {
    axios.post('http://localhost:4000/etudiants', etud)
        .then((res) => callback(res))
        .catch((err) => callback(err));
}

export const remove = (id, callback) => {
    axios.delete(`http://localhost:4000/etudiants/${id}`).then((res) => callback(res))
        .catch((err) => callback(err));
}


//
//
// import axios from 'axios';
//
// const API_URL = 'http://localhost:4000/api/etudiants'; // Assurez-vous que l'URL correspond à celle de votre serveur
//
// // Obtenir tous les étudiants
// export const getAllEtudiants = async () => {
//     try {
//         const response = await axios.get(API_URL);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching students", error);
//         throw error;
//     }
// }
//
// // Ajouter un nouvel étudiant
// export const addEtudiant = async (etudiant) => {
//     try {
//         const response = await axios.post(API_URL, etudiant);
//         return response.data;
//     } catch (error) {
//         console.error("Error adding student", error);
//         throw error;
//     }
// }
//
// // Mettre à jour un étudiant
// export const updateEtudiant = async (id, etudiant) => {
//     try {
//         const response = await axios.put(`${API_URL}/${id}`, etudiant);
//         return response.data;
//     } catch (error) {
//         console.error("Error updating student", error);
//         throw error;
//     }
// }
//
// // Supprimer un étudiant
// export const deleteEtudiant = async (id) => {
//     try {
//         const response = await axios.delete(`${API_URL}/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error deleting student", error);
//         throw error;
//     }
// }
//
