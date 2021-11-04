import express from "express"
import models from "../../database/models/index.js"

const {Products, Reviews, Users, Category} = models

const categoryRouter = express.Router()

categoryRouter.get("/", async (req,res,next) => {
    try {
        const categories = await Category.findAll()
        res.send(categories)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

categoryRouter.post("/", async (req,res,next) => {
    try {
        const {data} = req.body
        const categories = await Category.bulkCreate(data)
        res.send(categories)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

export default categoryRouter