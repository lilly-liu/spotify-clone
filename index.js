const express = require('express');

const app = express();

const port = 8888;

app.get('/', (req, res) => { // get request on index world, send back hello world as a response
    const data = {
        name:  'Lil',
        isAwesome: true
    };
    res.json(data);
});

app.get('/awesome-generator', (req, res) => {
    const { name, isAwesome } = req.query;
    res.send(`${name} is ${JSON.parse(isAwesome) ? 'really' : 'not'} awesome`);
});

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});