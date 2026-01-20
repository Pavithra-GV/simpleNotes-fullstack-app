const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/notesdb');

const NoteSchema = new mongoose.Schema({
  text: String
});

const Note = mongoose.model('Note', NoteSchema);

app.get('/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.post('/notes', async (req, res) => {
  const note = new Note({ text: req.body.text });
  await note.save();
  res.json(note);
});

app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});

app.delete('/notes/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Note deleted' });
});

app.put('/notes/:id', async (req, res) => {
  const updated = await Note.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { new: true }
  );
  res.json(updated);
});


