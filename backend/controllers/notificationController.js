const Notification = require('../models/Notification');

// Get all notifications
exports.getAllNotifications = (req, res) => {
  Notification.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get a specific notification
exports.getNotificationById = (req, res) => {
  Notification.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0]);
  });
};

// Create a new notification
exports.createNotification = (req, res) => {
  Notification.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Notification sent successfully' });
  });
};

// Update a notification
exports.updateNotification = (req, res) => {
  Notification.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Notification updated successfully' });
  });
};

// Delete a notification
exports.deleteNotification = (req, res) => {
  Notification.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Notification deleted successfully' });
  });
};
