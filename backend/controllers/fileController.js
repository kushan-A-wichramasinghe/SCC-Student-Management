const File = require('../models/File');

// Upload file
exports.uploadFile = (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  const fileData = {
    filename: req.file.originalname,
    filepath: req.file.path,
    uploader: req.body.uploader || 'Unknown',
  };

  File.upload(fileData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'File uploaded successfully' });
  });
};

// Get all files
exports.getAllFiles = (req, res) => {
  File.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Delete file
exports.deleteFile = (req, res) => {
  File.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'File deleted successfully' });
  });
};
