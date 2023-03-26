const { check } = require("express-validator");
const validateResult = require("../utils/validate");


const createdUserValidator = [
    check('username', "Error en el campo username")
        .exists().withMessage('El username debe extistir')
        .notEmpty().withMessage('El username no debe estar vacio')
        .isString()
        .isLength({ min: 6, max: 30 })
        .withMessage("El username debe tener entre 6 y 30 caracteres"),

    check('email', 'Error con el campo email')
        .exists().withMessage('No se encontro la propiedad email')
        .notEmpty().withMessage('No se encontro la valor email')
        .isEmail()
        .isString()
        .isLength({ min: 7, max: 50 }).withMessage('El email debe tener entre 7 y 50 caracteres'),

    check('password', 'Error con el campo password')
        .exists().withMessage('Password debe existir')
        .notEmpty().withMessage('Password no debe estar vacio')
        .isString()
        .isLength({ min: 7 }).withMessage('Password debe tener minimo 7 caracteres'),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]


module.exports = {
    createdUserValidator,
}