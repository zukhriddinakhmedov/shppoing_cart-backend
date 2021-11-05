import express from "express"
import productsCrud from "./handlers.js"
//import models from "../../database/models/index.js"

// const {Products, Reviews} = models

const router = express.Router()

router.get("/", productsCrud.findAllProducts)
router.post("/", productsCrud.createProduct)

router
.route("/:id")
.get(productsCrud.getProductById)
.put(productsCrud.updateProduct)
.delete(productsCrud.deleteProduct)

export default router
