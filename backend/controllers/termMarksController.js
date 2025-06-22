const TermMarks = require('../models/TermMarks');

exports.addMarks = (req, res) => {
  TermMarks.add(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Marks added successfully' });
  });
};

exports.getStudentMarks = (req, res) => {
  const studentId = req.params.student_id;
  TermMarks.getByStudentId(studentId, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};

exports.updateMarks = (req, res) => {
  const markId = req.params.id;
  TermMarks.update(markId, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Marks updated successfully' });
  });
};

exports.getAllMarks = (req, res) => {
  TermMarks.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};
