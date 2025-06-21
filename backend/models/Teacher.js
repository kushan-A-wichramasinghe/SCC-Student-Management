const db = require('../config/db');

const Teacher = {
  getAll: (callback) => {
    db.query('SELECT * FROM teachers', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM teachers WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    const { name, email, subject, password } = data;
    db.query(
      'INSERT INTO teachers (name, email, subject, password) VALUES (?, ?, ?, ?)',
      [name, email, subject, password],
      callback
    );
  },

  update: (id, data, callback) => {
    const { name, email, subject, password } = data;
    db.query(
      'UPDATE teachers SET name = ?, email = ?, subject = ?, password = ? WHERE id = ?',
      [name, email, subject, password, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM teachers WHERE id = ?', [id], callback);
  },
};

module.exports = Teacher;
