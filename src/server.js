import express from "express"
import cors from "cors"
import { testConnection, connectDB } from "./database/index.js"
import productsRouter from "./services/products/index.js"
import reviewsRouter from "./services/reviews/index.js"

const server = express()

const {PORT} = process.env

server.use(cors())

server.use(express.json())

server.use("/products", productsRouter)
server.use("/reviews", reviewsRouter)

server.listen(PORT, async() => {
    console.log(`Server is listening on port ${PORT}`)
    await testConnection()
    await connectDB()
})

server.on("error", (error) => {
    console.log("Server is stopped", error)
})