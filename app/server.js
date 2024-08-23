const express = require('express');
const db = require('./database/db');

const app = express();
const port = 2222;

app.get('/', (req, res) => {
    // __dirname returns the root directory of the site
    // the root is the directory that runs the node cmd
    res.sendFile(__dirname + "/index.html");
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

app.post('/login', (req, res) => {
    res.send(`You sent over ${req.username}`);
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/register.html");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
