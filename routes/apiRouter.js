const express = require('express');
const apiRouter = express.Router();
const fs = require('fs');
const { v4: uuid } = require('uuid');

apiRouter.get('/notes', (req,res) => {
    fs.readFile('./db/db.json', 'utf8', (error, notes) => {
        console.log(notes);
        error ? console.error(error) : res.json(JSON.parse(notes))
    });
});

apiRouter.post('/notes', (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid()
        };
        fs.readFile('./db/db.json', 'utf8', (error, notes) => {
            console.log(notes)
            error ? console.error(error) : res.json(JSON.parse(notes))
            let output = JSON.parse(notes);
            output.push(newNote);
            fs.writeFile('./db/db.json', JSON.stringify(output), (error) => {
              console.log(notes)
              error ? console.error(error) : res.json(JSON.parse(notes))
              res.json(newNote);
            });
          });
        };
      });

module.exports = apiRouter;