const db = require('../config/db');
const bcrypt = require('bcrypt');

const User = {
  create: async (data, callback) => {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      const sql = 'INSERT INTO users (name, email, role, password) VALUES (?, ?, ?, ?)';
      db.query(sql, [data.name, data.email, data.role, hashedPassword], callback);
    } catch (err) {
      callback(err);
    }
  },

  findByEmail: (email, callback) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], callback);
  }
};

module.exports = User;
