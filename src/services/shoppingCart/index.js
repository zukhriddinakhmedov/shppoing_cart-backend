import express from "express"
import models from "../../database/models/index.js"
import Category from "../../database/models/Category.js"

const { Products, ShoppingCart } = models

const shoppingCartRouters = express.Router()

shoppingCartRouters.get("/:userId", async (req,res,next) => {
    try {
        const shoppingCarts = await ShoppingCart.findAll({
            where: {
                userId: req.params.userId,
            },
            include: { model: Products, include: Category}
        })
    } catch (error) {
        
    }
})