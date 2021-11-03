import Products from "./Products.js"
import Reviews from "./Reviews.js"

// 1) => hasMany 2) => belongsTo

Products.hasMany(Reviews, {onDelete: "CASCADE"})
Reviews.belongsTo(Products, {onDelete: "CASCADE"})

export default { Products, Reviews }