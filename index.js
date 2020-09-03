const express = require('express');

const app = express();
const PORT = 8000;

function handleListening() {
  console.log(`Listening on : http://localhost:${PORT}`);
}

function handleHome(req, res) {
  console.log(req);
  res.send('hello, world!');
}

app.listen(PORT, handleListening);

app.get('/', handleHome);
