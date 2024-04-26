import axios from 'axios';

export const getAllEtud = (callback) => {
    axios.get('http://localhost:4000/etudiants ').then((res) => callback(res)).catch(err => callback(err));
}

export const addEtud = (etud, callback) => {
    axios.post('http://localhost:4000/etudiants', etud)
        .then((res) => callback(res))
        .catch((err) => callback(err));
}

export const removeEtud = (id, callback) => {
    axios.delete(`http://localhost:4000/etudiants/${id}`).then((res) => callback(res))
        .catch((err) => callback(err));
}

export const updateEtud = (id, etud, callback) => {
    axios.put(`http://localhost:4000/etudiants/${id}`, etud).then((res) => callback(res))
        .catch((err) => callback(err));
}