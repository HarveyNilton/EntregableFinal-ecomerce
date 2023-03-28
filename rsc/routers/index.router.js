const authRouter = require("./auth.router")
const userRouter = require("./user.router")


const apiRouters =(app) =>{
    app.use('/api/v1', userRouter)

    app.use('/api/v1', authRouter)
    
}

module.exports = apiRouters