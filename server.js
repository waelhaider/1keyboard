const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// تقديم الملفات الثابتة
app.use(express.static(path.join(__dirname)));

// مسار الصفحة الرئيسية
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Keyboard app is running at http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server');
});