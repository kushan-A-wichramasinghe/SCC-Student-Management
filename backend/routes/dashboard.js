const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Get dashboard summary
router.get('/', dashboardController.getDashboardCounts);

module.exports = router;
