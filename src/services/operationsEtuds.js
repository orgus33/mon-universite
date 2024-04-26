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