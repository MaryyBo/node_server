const User = require('../models/user')

// Метод контроллера на реєстрацію

module.exports.registerUser = (request, response, next) => {
    const { body } = request
    const user = new User(body);
    user.addUser();

    delete user.password;

    response.status(201).send(user);
}


// Метод контроллера на отримання всіх юзерів

module.exports.getAllUsers = (request, response, next) => {
    const usersArray = User.findAll()
    response.status(200).send(usersArray);
}

// Метод контроллера на отримання 1 користувача

module.exports.getOneUser = (request, response, next) => {
    const { userId } = request.params;
    const user = User.findOne(Number(userId));

    if (user) {// Якщо юзер існує, якщо він не undefined
        response.status(200).send(user)
    } else {
        response.status(404).end;
    }
}

