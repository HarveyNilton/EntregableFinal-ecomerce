const { Router } = require("express");
const { cartCraeted } = require("../controllers/cart.controllers");
const autentificate = require("../milddlewares/auth.middleware");

const cartRoutes = Router()

cartRoutes.post('/cart/:userId', cartCraeted)

module.exports = cartRoutes