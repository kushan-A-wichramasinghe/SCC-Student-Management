const Teacher = require('../models/Teacher');

exports.getAllTeachers = (req, res) => {
  Teacher.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getTeacherById = (req, res) => {
  Teacher.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0]);
  });
};

exports.createTeacher = (req, res) => {
  Teacher.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err
