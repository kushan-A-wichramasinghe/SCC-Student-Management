const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// GET all students
router.get('/', (req, res) => {
  Student.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// GET student by ID
router.get('/:id', (req, res) => {
  Student.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0]);
  });
});

// CREATE new student
router.post('/', (req, res) => {
  Student.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Student created successfully' });
  });
});

// UPDATE student
router.put('/:id', (req, res) => {
  Student.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Student updated successfully' });
  });
});

// DELETE student
router.delete('/:id', (req, res) => {
  Student.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Student deleted successfully' });
  });
});

module.exports = router;
