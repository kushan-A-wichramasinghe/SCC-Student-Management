// 📄 backend/controllers/studentController.js

const Student = require('../models/Student');

exports.getAllStudents = (req, res) => {
  Student.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getStudentById = (req, res) => {
  Student.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0]);
  });
};

exports.createStudent = (req, res) => {
  Student.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Student created successfully' });
  });
};

exports.updateStudent = (req, res) => {
  Student.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Student updated successfully' });
  });
};

exports.deleteStudent = (req, res) => {
  Student.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Student deleted successfully' });
  });
};
