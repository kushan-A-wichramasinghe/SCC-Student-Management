const db = require('../config/db');

const Comment = {
  getAll: (callback) => {
    db.query('SELECT * FROM comments ORDER BY created_at DESC', callback);
  },

  create: (data, callback) => {
    const { student_id, message } = data;
    db.query(
      'INSERT INTO comments (student_id, message) VALUES (?, ?)',
      [student_id, message],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM comments WHERE id = ?', [id], callback);
  },
};

module.exports = Comment;
