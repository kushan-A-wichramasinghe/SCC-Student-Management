const db = require('../config/db');

const Student = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM students';
    db.query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = 'SELECT * FROM students WHERE id = ?';
    db.query(sql, [id], callback);
  },

  create: (data, callback) => {
    const sql = 'INSERT INTO students (name, email, class, section) VALUES (?, ?, ?, ?)';
    db.query(sql, [data.name, data.email, data.class, data.section], callback);
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE students SET name = ?, email = ?, class = ?, section = ? WHERE id = ?';
    db.query(sql, [data.name, data.email, data.class, data.section, id], callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM students WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Student;

