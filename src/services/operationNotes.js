import axios from 'axios';

export const getAllNotes = (callback) => {
    axios.get('http://localhost:4000/notes ').then((res) => callback(res))
}

export const addNote = (note, callback) => {
    axios.post('http://localhost:4000/notes', note)
        .then((res) => callback(res))
        .catch((err) => callback(err));
}

export const updateNote = (id, note, callback) => {
    axios.put(`http://localhost:4000/notes/${id}`, note)
        .then(res => callback(res))
        .catch(err => callback(err));
}

export const removeNote = (id, callback) => {
    axios.delete(`http://localhost:4000/notes/${id}`).then((res) => callback(res))
        .catch((err) => callback(err));
}