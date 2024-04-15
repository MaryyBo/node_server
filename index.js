// Шлях + метод - це роут 

const express = require('express');
const app = express(); // додаток відловили в змінній

const PORT = 5000;

app.get('/', (request, response) => { // http://localhost:5000/
    response.send('Hello world');
}, () => {
    console.log('first request handler');
})

app.get('/index.html', (request, response) => {
response.status(404).send('Test /index.html');
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

