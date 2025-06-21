const Dashboard = require('../models/Dashboard');

exports.getDashboardCounts = (req, res) => {
  Dashboard.getCounts((err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0]);
  });
};
