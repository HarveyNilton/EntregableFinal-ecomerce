const { Router } = require("express");
const { userLogin, verifyEmail } = require("../controllers/auth.controllers");


const authRouter = Router()

authRouter.post('/auth/login', userLogin)

authRouter.post('/auth/verify', verifyEmail)

module.exports = authRouter