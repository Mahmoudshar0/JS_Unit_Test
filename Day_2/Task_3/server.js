const express = require('express');

app = express();

app.get('/hello', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get("/notfound", (req, res) => {
    res.status(200).send('Not Found');
});

const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = server;