const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// @route   GET /api/notifications
// @desc    Get all notifications (Everyone can see)
router.get('/', notificationController.getAllNotifications);

// @route   GET /api/notifications/:id
// @desc    Get single notification by ID
router.get('/:id', notificationController.getNotificationById);

// @route   POST /api/notifications
// @desc    Create new notification (Admin / Teacher only)
router.post('/', notificationController.createNotification);

// @route   PUT /api/notifications/:id
// @desc    Update notification (Admin / Teacher only)
router.put('/:id', notificationController.updateNotification);

// @route   DELETE /api/notifications/:id
// @desc    Delete notification (Admin / Teacher only)
router.delete('/:id', notificationController.deleteNotification);

module.exports = router;
