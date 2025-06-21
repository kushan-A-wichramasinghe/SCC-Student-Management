const db = require('../config/db');

const Dashboard = {
  getCounts: (callback) => {
    const query = `
      SELECT 
        (SELECT COUNT(*) FROM students) AS total_students,
        (SELECT COUNT(*) FROM teachers) AS total_teachers,
        (SELECT COUNT(*) FROM students WHERE is_online = 1) AS online_students
    `;
    db.query(query, callback);
  }
};

module.exports = Dashboard;
