const UserService = require("../services/user.services");


const createdUser =  async (req, res, next) => {
    try {
        const newUser = req.body
        const result = await UserService.create(newUser)
        res.status(201).send(result)
    } catch (error) {
        next(error)
       // res.status(400).json(error)
    }
}

module.exports ={
    createdUser,
}