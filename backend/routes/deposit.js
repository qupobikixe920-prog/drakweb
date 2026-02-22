const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// configure multer to store screenshots
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, unique + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// endpoint to submit deposit screenshot
router.post('/screenshot', upload.single('screenshot'), (req, res) => {
  // in a real app, you'd create a transaction record and link to user
  res.json({
    message: 'screenshot received',
    file: req.file,
  });
});

module.exports = router;
