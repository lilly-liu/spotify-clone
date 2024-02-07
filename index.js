const express = require('express');

const app = express();

app.get('/', (req, res) => { // get request on index world, send back hello world as a response
    res.send('Hello World!');
});

const port = 8888;
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});