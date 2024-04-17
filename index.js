// Шлях + метод - це роут 

const express = require('express');
const {validateUser} = require ('./middlewares')


const app = express(); // додаток відловили в змінній

const bodyParser = express.json(); // request.body

const PORT = 5000;

app.post('/user', bodyParser, validateUser)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})



/*
Задача: зареєструвати юзера

1. Прийняти запит на певний роут
2. Розпарсити дані, які прийшли з запитом
3. Валідувати дані
4. Зберегти ці дані
5. Надіслати відповідь клієнту

*/