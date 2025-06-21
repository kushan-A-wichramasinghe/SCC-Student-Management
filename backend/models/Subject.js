const db = require('../config/db');

const Subject = {
  getAll: (callback) => {
    db.query('SELECT * FROM subjects ORDER BY name ASC', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM subjects WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    const { name, grade } = data;
    db.query(
      'INSERT INTO subjects (name, grade) VALUES (?, ?)',
      [name, grade],
      callback
    );
  },

  update: (id, data, callback) => {
    const { name, grade } = data;
    db.query(
      'UPDATE subjects SET name = ?, grade = ? WHERE id = ?',
      [name, grade, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM subjects WHERE id = ?', [id], callback);
  },
};

module.exports = Subject;
