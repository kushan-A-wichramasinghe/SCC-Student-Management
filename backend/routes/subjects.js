const Subject = require('../models/Subject');

// Get all subjects
exports.getAllSubjects = (req, res) => {
  Subject.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get subject by ID
exports.getSubjectById = (req, res) => {
  Subject.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0]);
  });
};

// Create a new subject
exports.createSubject = (req, res) => {
  Subject.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Subject created successfully' });
  });
};

// Update subject
exports.updateSubject = (req, res) => {
  Subject.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Subject updated successfully' });
  });
};

// Delete subject
exports.deleteSubject = (req, res) => {
  Subject.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Subject deleted successfully' });
  });
};
