const db = require('../config/db');

const Notification = {
  getAll: (callback) => {
    db.query('SELECT * FROM notifications ORDER BY created_at DESC', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM notifications WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    const { title, message, sender } = data;
    db.query(
      'INSERT INTO notifications (title, message, sender) VALUES (?, ?, ?)',
      [title, message, sender],
      callback
    );
  },

  update: (id, data, callback) => {
    const { title, message } = data;
    db.query(
      'UPDATE notifications SET title = ?, message = ? WHERE id = ?',
      [title, message, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM notifications WHERE id = ?', [id], callback);
  },
};

module.exports = Notification;
