import express from "express"
import models from "../../database/models/index.js"


const {Users, Reviews, Products} = models
const usersRouter = express.Router()

usersRouter.get("/", async (req, res,next) => {
    try {
        const users = await Users.findAll({
            include: {model: Products, include: Reviews},
        })
        res.send(users)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

usersRouter.post("/", async (req,res,next) => {
    try {
        const user = await Users.create(req.body)
        res.send(user)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

export default usersRouter