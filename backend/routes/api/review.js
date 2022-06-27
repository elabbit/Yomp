const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { User, Business, Review } = require('../../db/models')

//GET REVIEWS
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
const businessId = req.params.id;
    const reviews = await Review.findAll({
        where: {businessId},
        include: [User],
        order: [
            ['createdAt', 'DESC']
        ]
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

//EDIT A REVIEW
router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const {
      id,rating,review
    } = req.body;

    const editedReview = await Review.findByPk(id, {
        include: [User]
    })

    editedReview.rating = rating;
    editedReview.review = review;
    await editedReview.save();

    return res.json(editedReview);
}));

//DELETE A REVIEW
router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const review = await Review.findByPk(id)
    await review.destroy();

    return res.json(id)
}))




module.exports = router;
