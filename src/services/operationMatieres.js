import axios from 'axios';

export const getAllMatieres = (callback) => {
    axios.get('http://localhost:4000/matieres')
        .then(res => callback(res))
        .catch(err => callback(err));
}

export const addMatiere = (matiere, callback) => {
    axios.post('http://localhost:4000/matieres', matiere)
        .then(res => callback(res))
        .catch(err => callback(err));
}

export const updateMatiere = (id, matiere, callback) => {
    axios.put(`http://localhost:4000/matieres/${id}`, matiere)
        .then(res => callback(res))
        .catch(err => callback(err));
}

export const removeMatiere = (id, callback) => {
    axios.delete(`http://localhost:4000/matieres/${id}`)
        .then(res => callback(res))
        .catch(err => callback(err));
}
