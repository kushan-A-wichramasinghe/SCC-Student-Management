const db = require('../config/db');

const File = {
  getAll: (callback) => {
    db.query('SELECT * FROM files ORDER BY uploaded_at DESC', callback);
  },

  upload: (data, callback) => {
    const { filename, filepath, uploader } = data;
    db.query(
      'INSERT INTO files (filename, filepath, uploader) VALUES (?, ?, ?)',
      [filename, filepath, uploader],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM files WHERE id = ?', [id], callback);
  },
};

module.exports = File;
