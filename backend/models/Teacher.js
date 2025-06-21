const db = require('../config/db');

const Teacher = {
  getAll: (callback) => {
    db.query('SELECT * FROM teachers', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM teachers WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    const sql = 'INSERT INTO teachers (name, email, subject) VALUES (?, ?, ?)';
    db.query(sql, [data.name, data.email, data.subject], callback);
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE teachers SET name = ?, email = ?, subject = ? WHERE id = ?';
    db.query(sql, [data.name, data.email, data.subject, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM teachers WHERE id = ?', [id], callback);
  }
};

module.exports = Teacher;

