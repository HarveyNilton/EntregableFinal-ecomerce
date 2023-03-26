const User = require("../models/user.model");


class  UserService{

    static async create(newUser){
        try {
            const userCreate = await User.create(newUser);
            return userCreate
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserService;