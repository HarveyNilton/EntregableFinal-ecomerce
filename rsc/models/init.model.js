const Car = require("./car.model")
const Order = require("./order.model")
const Product = require("./product.model")
const ProductInCar = require("./productincar.model")
const ProductInOrder = require("./productinorder")
const User = require("./user.model")


const initModels =() => {
    User.hasMany(Order, {foreignKey:"userId"})
    Order.belongsTo(User, {foreignKey:"userId"})

    User.hasMany(Car, {foreignKey:"userId"})
    Car.belongsTo(User, {foreignKey:"userId"})

    User.hasMany(Product,{foreignKey:"userId"})
    Product.belongsTo(User, {foreignKey:"userId"})

    Car.hasMany(ProductInCar, {foreignKey:"carId"})
    ProductInCar.belongsTo(Car, {foreignKey:"carId"})

    Product.hasMany(ProductInCar, {foreignKey:"productId"})
    ProductInCar.belongsTo(Product, {foreignKey:"productId"})

    Product.hasMany(ProductInOrder,{foreignKey:"productId"})
    ProductInOrder.belongsTo(Product, {foreignKey:"productId"})

    Order.hasMany(ProductInOrder, {foreignKey:"orderId"})
    ProductInOrder.belongsTo(Order, {foreignKey:"orderId"})
    
}

module.exports = initModels