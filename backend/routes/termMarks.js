const express = require('express');
const router = express.Router();
const controller = require('../controllers/termMarksController');

router.post('/add', controller.addMarks);
router.get('/student/:student_id', controller.getStudentMarks);
router.put('/update/:id', controller.updateMarks);
router.get('/all', controller.getAllMarks);

module.exports = router;
