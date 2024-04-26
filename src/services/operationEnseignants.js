import axios from 'axios';


export const getAllEnseignants = (callback) => {
    axios.get('http://localhost:4000/enseignants')
        .then(res => callback(res))
        .catch(err => callback(err));
}

export const addEnseignant = (enseignant, callback) => {
    axios.post('http://localhost:4000/enseignants', enseignant)
        .then(res => callback(res))
        .catch(err => callback(err));
}

export const updateEnseignant = (id, enseignant, callback) => {
    axios.put(`http://localhost:4000/enseignants/${id}`, enseignant)
        .then(res => callback(res))
        .catch(err => callback(err));
}

export const removeEnseignant = (id, callback) => {
    axios.delete(`http://localhost:4000/enseignants/${id}`)
        .then(res => callback(res))
        .catch(err => callback(err));
}