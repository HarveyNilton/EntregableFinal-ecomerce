const { Router } = require("express");
const { createdUser } = require("../controllers/user.controller");
const { createdUserValidator } = require("../validators/user.validator");

const userRouter = Router()

userRouter.post('/api/v1/users' ,createdUserValidator, createdUser)

module.exports = userRouter