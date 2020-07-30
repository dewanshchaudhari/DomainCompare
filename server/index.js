const express = require('express');
const app = express();
const data = require('./data/data');

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.use('/data', data);
const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`server up and running at http://localhost:${port}`);
});