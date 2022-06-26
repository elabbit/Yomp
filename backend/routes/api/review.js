const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { User, Business, Review } = require('../../db/models')

//GET REVIEWS
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
const businessId = req.params.id;
    const reviews = await Review.findAll({
        where: {businessId},
        include: [User]
    });
    return res.json(reviews);
}));

//ADD A REVIEW
router.post('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const {
userId,businessId,rating,review
    } = req.body;

    const newRev = await Review.create({ userId,businessId,rating,review })
    const userRev = await Review.findByPk(newRev.id, {
        include: [User]
    })
    return res.json(userRev);
}));




module.exports = router;
