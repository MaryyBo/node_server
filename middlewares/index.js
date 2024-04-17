const {registrationUserSchema} = require('../schemas/index.js')

module.exports.validateUser = async (request, response, next) => {
    try {
        await registrationUserSchema.validate(request.body);
        return next ()

    } catch (error) {
        response.status(400).send(error.message);
    }
}