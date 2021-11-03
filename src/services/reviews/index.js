import {Router} from "express"

import reviewsHandler from "./hanlers.js"

const router = Router()

router.get("/", reviewsHandler.getAllReviews)
router.post("/", reviewsHandler.createReview)

router.route("/:id")
.get(reviewsHandler.getReviewById)
.put(reviewsHandler.updateReview)
.delete(reviewsHandler.deleteReview)

export default router