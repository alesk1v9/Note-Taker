const express = require('express');
const htmlRouter = express.Router();

htmlRouter.get('/', (req, res) => {
    res.sendFile('C:/Users/alexs/OneDrive/Documentos/Coding Bootcamp/challenges/challenge 9 - Note Taker!/public/index.html');
});

htmlRouter.get('/notes', (req, res) => {
    res.sendFile('C:/Users/alexs/OneDrive/Documentos/Coding Bootcamp/challenges/challenge 9 - Note Taker!/public/notes.html'); 
});

module.exports = htmlRouter;