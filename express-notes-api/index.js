const express = require('express');
const viewNotes = require('./viewNotes');
const fs = require('fs');
const data = require('./data.json');

const app = express();
app.use(express.json());

app.get('/api/notes', (req, res) => {
  res.status(200).json(viewNotes(null));
});

app.get('/api/notes/:id', (req, res) => {
  const noteID = parseInt(req.params.id);
  if (noteID < 0 || !Number.isInteger(noteID)) {
    return res.status(400).json({ Error: 'ID is not a valid positive integer' });
  } else {
    const singleNote = viewNotes(noteID);

    if (singleNote) {
      res.status(200).json(singleNote);
    } else {
      res.status(404).json({ Error: 'Selected ID does not exist in database' });
    }
  }
});

app.post('/api/notes', (req, res) => {
  const requestNote = req.body;
  if (requestNote.content === undefined) {
    return res.status(400).json({ Error: 'No content included in request body' });
  } else {
    const dataObj = data;
    requestNote.id = dataObj.nextId;
    dataObj.notes[dataObj.nextId] = requestNote;
    dataObj.nextId++;
    const updatedData = JSON.stringify(dataObj, null, 2);
    res.status(201).json(requestNote);
    fs.writeFile('data.json', updatedData, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ Error: 'An unexpected error occured' });
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteID = parseInt(req.params.id);
  if (deleteID <= 0 || !Number.isInteger(deleteID)) {
    res.status(400).json({ Error: 'ID is not a valid positive integer' });
  } else {
    const dataObj = data;
    const deleteNote = dataObj.notes[deleteID];
    if (deleteNote !== null) {
      delete dataObj.notes[deleteID];
      const updatedData = JSON.stringify(dataObj, null, 2);
      fs.writeFile('data.json', updatedData, 'utf8', err => {
        if (err) {
          console.error(err);
          return res.status(500).json({ Error: 'An unexpected error occured' });
        }
        res.status(204).json();
      });
    } else {
      res.status(404).json({ Error: 'The matching note does not exist' });
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  const requestedUpdate = req.body;
  const updateID = parseInt(req.params.id);
  if (updateID <= 0 || !Number.isInteger(updateID)) {
    return res.status(400).json({ Error: 'Invalid ID' });
  }

  if (requestedUpdate.content === undefined) {
    return res.status(400).json({ Error: 'No content included in request body' });
  }

  const dataObj = data;
  const updateNote = dataObj.notes[updateID];

  if (updateNote === null) {
    return res.status(404).json({ Error: 'No matching note in database' });
  } else {
    dataObj.notes[updateID].content = requestedUpdate.content;
    const updatedData = JSON.stringify(dataObj, null, 2);
    fs.writeFile('data.json', updatedData, 'utf8', err => {
      if (err) {
        console.error(err);
        return res.status(500).json({ Error: 'An unexpected error occured' });
      }
      res.status(200).json(requestedUpdate);
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('App is listening on port 3000');
});
