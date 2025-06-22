const db = require('../config/db');

const Notification = {
  create: (sender_role, title, message, callback) => {
    const sql = "INSERT INTO notifications (sender_role, title, message) VALUES (?, ?, ?)";
    db.query(sql, [sender_role, title, message], callback);
  },

  getAll: (callback) => {
    const sql = "SELECT * FROM notifications ORDER BY created_at DESC";
    db.query(sql, callback);
  },

  update: (id, title, message, callback) => {
    const sql = "UPDATE notifications SET title = ?, message = ? WHERE id = ?";
    db.query(sql, [title, message, id], callback);
  }
};

module.exports = Notification;
