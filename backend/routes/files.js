const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const multer = require('multer');

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // ✅ save files to uploads/ folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Routes
router.post('/upload', upload.single('file'), fileController.uploadFile);
router.get('/', fileController.getAllFiles);
router.delete('/:id', fileController.deleteFile);

module.exports = router;
