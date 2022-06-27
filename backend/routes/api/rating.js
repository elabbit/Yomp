const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { User, Business, Review } = require('../../db/models')

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const businessId = req.params.id;
    const reviews = await Review.findAll({
        where: { businessId },
    });

    const ratings = reviews.map((review) => review.rating)
    let sum = 0;
    ratings.forEach((num) => sum += num)
    const average = sum / ratings.length;
    const roundedAverage = Math.round(average / 0.5) * 0.5;
    const ratingInfo = { businessId, rating: roundedAverage }

    return res.json(ratingInfo);
}));


module.exports = router;
