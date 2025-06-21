const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

// Get all grades
router.get('/', gradeController.getAllGrades);

// Assign new grade
router.post('/', gradeController.createGrade);

// Update existing grade
router.put('/:id', gradeController.updateGrade);

// Delete grade
router.delete('/:id', gradeController.deleteGrade);

module.exports = router;
