const router = require('express').Router();
const {MakeNewNote, updateDataBase} = require("../../lib/notes");
const {notes} = require("../../db/db.json");
const { v4: uuidv4 } = require('uuid');


// show all notes in json data
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  });

  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = MakeNewNote(req.body, notes);
    res.json(newNote);
  });  

  router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    updateDataBase(params, notes);
    res.redirect('');
  });

  module.exports = router;