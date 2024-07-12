const express = require('express');
const axios = require('axios');
const app = express();
const port = 80;
const backendUrl = process.env.BACKEND_URL || 'http://localhost:8080';

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(backendUrl);
        res.send(`<h1>Frontend</h1><p>${response.data.message}</p><p>Time: ${response.data.time}</p>`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error connecting to backend');
    }
});

app.listen(port, () => {
    console.log(`Frontend listening at http://localhost:${port}`);
});
