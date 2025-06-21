const bcrypt = require('bcrypt');
const db = require('../config/db');

// Helper: check user table by role
const getTableByRole = (role) => {
  if (role === 'admin') return 'admins';
  if (role === 'teacher') return 'teachers';
  if (role === 'student') return 'students';
  return null;
};

// Register new user
exports.register = async (req, res) => {
  const { role, email, password, name } = req.body;
  const table = getTableByRole(role);
  if (!table) return res.status(400).json({ error: 'Invalid role' });

  try {
    const hashed = await bcrypt.hash(password, 10);
    let query, values;

    if (role === 'admin') {
      query = `INSERT INTO ${table} (email, password) VALUES (?, ?)`;
      values = [email, hashed];
    } else {
      query = `INSERT INTO ${table} (name, email, password) VALUES (?, ?, ?)`;
      values = [name, email, hashed];
    }

    db.query(query,
