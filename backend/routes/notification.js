const express = require('express');
const router = express.Router();
const controller = require('../controllers/notificationController');

// Create a new notification
router.post('/create', controller.createNotification);

// Get all notifications
router.get('/all', controller.getAllNotifications);

// Update a notification (admin/teacher only)
router.put('/update/:id', controller.updateNotification);

module.exports = router;
