const db = require('../config/db');

const Admin = {
  getByEmail: (email, callback) => {
    db.query('SELECT * FROM admins WHERE email = ?', [email], callback);
  },

  create: (data, callback) => {
    const { email, password } = data;
    db.query(
      'INSERT INTO admins (email, password) VALUES (?, ?)',
      [email, password],
      callback
    );
  },
};

module.exports = Admin;
