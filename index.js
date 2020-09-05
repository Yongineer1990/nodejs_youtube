import express from 'express';

const app = express();
const PORT = 8000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);
const handleDetail = (req, res) => {
  console.log('/detail');
  res.send('detail');
};
const handleHome = (req, res) => {
  console.log('root');
  res.send('hello, world!');
};
const hendleProfile = (req, res) => {
  console.log('/profile');
  res.send('profile');
};
const middleware = (req, res, next) => {
  console.log('this is middleware');
  next();
};

app.listen(PORT, handleListening);

app.get('/', handleHome);

app.use(middleware);

app.get('/detail', handleDetail);
app.get('/profile', hendleProfile);
