import express from "express"
import cors from "cors"
import { syncSequelize } from "./database/index.js"
import productsRouter from "./services/products/index.js"
import reviewsRouter from "./services/reviews/index.js"
import usersRouter from "./services/users/index.js"
import categoryRouter from "./services/categories/index.js"


const server = express()

const {PORT} = process.env

server.use(cors())

server.use(express.json())

server.use("/products", productsRouter)
server.use("/reviews", reviewsRouter)
server.use("/users", usersRouter)
server.use("/categories", categoryRouter)

server.listen(PORT, async() => {
    console.log(`Server is listening on port ${PORT}`)
    await syncSequelize()
})

server.on("error", (error) => {
    console.log("Server is stopped", error)
})