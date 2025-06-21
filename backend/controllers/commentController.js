const Comment = require('../models/Comment');

// Get all comments (Admin / Teacher View)
exports.getAllComments = (req, res) => {
  Comment.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Create comment (Student Use)
exports.createComment = (req, res) => {
  Comment.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Comment submitted successfully' });
  });
};

// Delete comment (Admin / Teacher)
exports.deleteComment = (req, res) => {
  Comment.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Comment deleted successfully' });
  });
};
