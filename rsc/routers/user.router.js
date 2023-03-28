const { Router } = require("express");
const { createdUser, getAllUsers, updateUser } = require("../controllers/user.controller");
const { createdUserValidator, updateUserValidator } = require("../validators/user.validator");

const userRouter = Router()

userRouter.post('/users' ,createdUserValidator, createdUser)

userRouter.get('/users', getAllUsers)

userRouter.put('/user/:id', updateUserValidator, updateUser)

module.exports = userRouter