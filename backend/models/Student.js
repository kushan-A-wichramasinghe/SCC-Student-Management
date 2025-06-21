const db = require('../config/db');

const Student = {
  getAll: (callback) => {
    db.query('SELECT * FROM students', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM students WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    const { name, email, grade, class_name } = data;
    db.query(
      'INSERT INTO students (name, email, grade, class_name) VALUES (?, ?, ?, ?)',
      [name, email, grade, class_name],
      callback
    );
  },

  update: (id, data, callback) => {
    const { name, email, grade, class_name } = data;
    db.query(
      'UPDATE students SET name = ?, email = ?, grade = ?, class_name = ? WHERE id = ?',
      [name, email, grade, class_name, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM students WHERE id = ?', [id], callback);
  },
};

module.exports = Student;
