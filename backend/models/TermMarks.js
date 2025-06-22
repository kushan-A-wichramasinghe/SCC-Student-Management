const db = require('../config/db');

const TermMarks = {
  add: (data, callback) => {
    const sql = "INSERT INTO term_marks (student_id, subject, term, year, marks) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [data.student_id, data.subject, data.term, data.year, data.marks], callback);
  },

  getByStudentId: (student_id, callback) => {
    const sql = "SELECT * FROM term_marks WHERE student_id = ?";
    db.query(sql, [student_id], callback);
  },

  update: (id, data, callback) => {
    const sql = "UPDATE term_marks SET subject=?, term=?, year=?, marks=? WHERE id=?";
    db.query(sql, [data.subject, data.term, data.year, data.marks, id], callback);
  },

  getAll: (callback) => {
    const sql = "SELECT * FROM term_marks";
    db.query(sql, callback);
  }
};

module.exports = TermMarks;
