const db = require('../config/db');

const Grade = {
  getAll: (callback) => {
    db.query('SELECT * FROM grades ORDER BY created_at DESC', callback);
  },

  create: (data, callback) => {
    const { student_id, subject, grade } = data;
    db.query(
      'INSERT INTO grades (student_id, subject, grade) VALUES (?, ?, ?)',
      [student_id, subject, grade],
      callback
    );
  },

  update: (id, data, callback) => {
    const { grade } = data;
    db.query(
      'UPDATE grades SET grade = ? WHERE id = ?',
      [grade, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM grades WHERE id = ?', [id], callback);
  }
};

module.exports = Grade;
