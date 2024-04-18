// Шлях + метод - це роут 

const express = require('express');
const { validateUser } = require('./middlewares')

const UserController = require('./controllers/userController');
const User = require('./models/user');


const app = express(); // додаток відловили в змінній

const bodyParser = express.json(); // request.body

const PORT = 5000;

// Роут на реєстрацію
app.post('/user', bodyParser, validateUser, UserController.registerUser)

// Роут на отримання всіх користувачів

app.get('/users', UserController.getAllUsers);  // Стукамо на http://localhost:5000/users

// Роут на отримання конкретного юзера

app.get('/user/:userId', UserController.getOneUser);

// Роут на видалення користувача

app.delete ('/user/:userId', UserController.deleteOneUser);



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

/*
Створити роут на отримання всіх ваших юзерів

Декомпозиція задачі:

1. Спочатку прописати роут в index.js
2. Створити новий метод контроллеру UserController, у якому викликати метод метод findAll з моделі

*/