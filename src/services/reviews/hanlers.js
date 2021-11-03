import models from "../../database/models/index.js"

const {Products, Reviews } = models

const getAllReviews = async (req,res,next) => {
    try {
        const reviews = await Reviews.findAll({include: Products})
        res.send(reviews)
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const getReviewById = async (req,res,next) => {
    try {
        const review = await Reviews.findByPk(req.params.id)
        res.send(review)
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const createReview = async (req,res,next) => {
    try {
        const newReview = await Reviews.create(req.body)
        res.send(newReview)
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const updateReview = async (req,res,next) => {
    try {
        const editReview = await Reviews.update(req.body, {
            where: {
                id: req.params.id,
            },
            returning: true
        })
        res.send(editReview)
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const deleteReview = async (req,res,next) => {
    try {
        const reviews = await Reviews.destroy({
            where: {
                id: req.params.id,
            },
        })
        res.send({reviews})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const  reviewsHandler = {
    getAllReviews,
    getReviewById,
    createReview,
    deleteReview,
    updateReview
}

export default reviewsHandler