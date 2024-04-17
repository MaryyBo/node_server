// Шлях + метод - це роут 

const express = require('express');
const yup = require('yup')

const app = express(); // додаток відловили в змінній

const bodyParser = express.json(); // request.body

const validationSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isSubscribed: yup.boolean().required()

})
const PORT = 5000;

app.post('/user', bodyParser, async (request, response, next) => {
    try {
        console.log(request.body);
        const value = await validationSchema.validate(request.body);
        console.log(value);

    } catch (error) {
        response.status(400).send(error.message);
    }
})

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