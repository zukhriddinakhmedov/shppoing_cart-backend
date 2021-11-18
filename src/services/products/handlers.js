import models from "../../database/models/index.js"


const {Products, Users, Reviews, ShoppingCart, Category} = models

const findAllProducts = async (req,res,next) => {
    try {
        const products = await Products.findAll({
            where: req.query.name
            ? {name: { [Op.iLike]: `%${req.query.name}%`} }
            : {},
            include: {model: Category, where: req.query.category ? { name: req.query.category} : {}, } 
        })
        res.send(products)
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const createProduct = async (req,res,next) => {
    try {
        const data = await Products.create(req.body)
        res.send(data)
    } catch (error) {
        console.log(error)
        next(error)        
    }
}
const getProductById = async (req,res,next) => {
    try {
        const product = await Products.findByPk(req.params.id)
        res.send(product)
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const updateProduct = async (req,res,next) => {
    try {
        const newProduct = await Products.update(
            {...req.body},
            {
                where: {
                    id: req.params.id,
                },
                returning: true
            }
        )
        res.send(newProduct[1][0])
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const deleteProduct = async (req,res,next) => {
    try {
        const products = await Products.destroy({
            where: {
                id: req.params.id,
            },
        })
        res.send()
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const productsCrud = {
    findAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
}

export default productsCrud