import express from 'express';
import Tesseract from 'tesseract.js';

const app = express();

app.use(express.json());

app.post('/api/ocr', async (req, res) => {
  const { imageBase64 } = req.body;

  const result = await Tesseract.recognize(
    Buffer.from(imageBase64, 'base64').toString('base64'),
    'eng',
    { logger: (info) => console.log(info) }
  );

  res.status(200).json({ text: result.data.text });
});

export default app;