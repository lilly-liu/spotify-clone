require('dotenv').config()

const express = require('express');
const querystring = require('node:querystring'); 

const app = express();

const port = 8888;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

console.log(process.env.REDIRECT_URI);

app.get('/', (req, res) => { // get request on index world, send back hello world as a response
    const data = {
        name:  'Lil',
        isAwesome: true
    };
    res.json(data);
});

/**
 * Generates a random string containing numbers and letters
 * @param {number} length The length of the string
 * @return {string} the generated string
 */
const generateRandomString = length => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
const stateKey = 'spotify_auth_state'

app.get('/login', (req, res) => {
    const state = generateRandomString(16);
    const scope = 'user-read-private user-read-email'

    res.cookie(stateKey, state)
    res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      state: state,
    }));
});

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});