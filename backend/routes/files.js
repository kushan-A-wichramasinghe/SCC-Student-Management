const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const multer = require('multer');
const path = require('path');

// File upload config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Upload route
router.post('/upload', upload.single('file'), fileController.uploadFile);

// List all files
router.get('/', fileController.getAllFiles);

// Delete file
router.delete('/:id', fileController.deleteFile);

module.exports = router;
