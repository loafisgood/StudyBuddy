const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');

const app = express();

// Configure multer to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const imageBuffer = req.file.buffer;

  Tesseract.recognize(imageBuffer)
    .then(({ data: { text } }) => {
      res.json({ text });
    })
    .catch((error) => {
      res.status(500).json({ error: 'OCR process failed' });
    });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});