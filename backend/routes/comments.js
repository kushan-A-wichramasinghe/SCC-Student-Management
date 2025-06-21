const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// @route   GET /api/comments
// @desc    Get all comments (admin/teacher)
router.get('/', commentController.getAllComments);

// @route   POST /api/comments
// @desc    Create new comment (student)
router.post('/', commentController.createComment);

// @route   DELETE /api/comments/:id
// @desc    Delete comment (admin/teacher)
router.delete('/:id', commentController.deleteComment);

module.exports = router;
