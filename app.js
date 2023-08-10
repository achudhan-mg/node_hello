// server/app.js
const express = require('express');
const app = express();
const port = 9953;

app.get('/', (req, res) => {
  res.send('<h1>Hello Achudhan!</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
