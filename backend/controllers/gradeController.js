const Grade = require('../models/Grade');

// Get all grades
exports.getAllGrades = (req, res) => {
  Grade.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Create new grade
exports.createGrade = (req, res) => {
  Grade.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Grade assigned successfully' });
  });
};

// Update existing grade
exports.updateGrade = (req, res) => {
  Grade.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Grade updated successfully' });
  });
};

// Delete grade
exports.deleteGrade = (req, res) => {
  Grade.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Grade deleted successfully' });
  });
};
