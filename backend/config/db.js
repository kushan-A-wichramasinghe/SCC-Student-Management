const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // ✅ Use your DB password here
  database: 'scc_management'
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ MySQL Connected!');
});

module.exports = db;
