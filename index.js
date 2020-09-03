import express from 'express';

const app = express();
const PORT = 8000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);
const handleHome = (req, res) => res.send('hello, world!');
const hendleProfile = (req, res) => res.send('profile');

app.listen(PORT, handleListening);

app.get('/', handleHome);
app.get('/profile', hendleProfile);
