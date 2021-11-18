import Products from "./Products.js"
import Reviews from "./Reviews.js"
import Category from "./Category.js"
import Users from "./Users.js"
import ShoppingCart from "./ShoppingCart.js"
// 1) => hasMany 2) => belongsTo

Category.hasMany(Products, {
    onDelete: "cascade",
    foreignKey: {allowNull: false}
})
Products.belongsTo(Category, {
    onDelete: "cascade",
    foreignKey: {allowNull: false}
})

Products.belongsToMany(Users, {through: {model: ShoppingCart, unique: false} } )

Users.belongsToMany(Products ,{ through: {model: ShoppingCart, unique: false} } )

Products.hasMany(ShoppingCart)
ShoppingCart.belongsTo(Products)

Users.hasMany(ShoppingCart)
ShoppingCart.belongsTo(Users)

Users.hasMany(Reviews)
Reviews.belongsTo(Users)

export default { Products, Reviews, Users, Category, ShoppingCart }