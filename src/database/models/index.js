import Products from "./Products.js"
import Reviews from "./Reviews.js"
import Category from "./Category.js"
import Users from "./Users.js"
import ShoppingCart from "./ShoppingCart.js"
// 1) => hasMany 2) => belongsTo

Products.hasMany(Reviews, {onDelete: "CASCADE"})
Reviews.belongsTo(Products, {onDelete: "CASCADE"})

Products.belongsToMany(Category, {
    through: {model: ProductsCategory, unique: false},
})
Category.belongsToMany(Products, {
    through: {model: ProductsCategory, unique: false}
})

Users.hasMany(Reviews, {onDelete: "CASCADE"})
Reviews.belongsTo(Users, {onDelete: "CASCADE"})

export default { Products, Reviews, Users, Category, ShoppingCart }