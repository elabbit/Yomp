const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { User, Business, Review, Photo } = require('../../db/models')


async function updateRating(businessId) {
    const reviews = await Review.findAll({
        where: { businessId },
    });
    const business = await Business.findByPk(businessId)

    if (!reviews.length) {
        business.rating = 0;
        await business.save();
        return;
    } else {
        const ratings = reviews.map((review) => review.rating)
        let sum = 0;
        ratings.forEach((num) => sum += num)
        const average = sum / ratings.length;
        business.rating = average;
        await business.save();
        return;

    }


}


//GETRECETREVIEWS
router.get('/recent', asyncHandler(async (req, res, next) => {
    const reviews = await Review.findAll({
        limit: 12,
        include: [User, Business],
        order: [
            ['updatedAt', 'DESC']
        ]
    });
    return res.json(reviews);
}));




//GET REVIEWS
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const businessId = req.params.id;
    const reviews = await Review.findAll({
        where: { businessId },
        include: [User, Photo],
        order: [
            ['createdAt', 'DESC']
        ]
    });
    return res.json(reviews);
}));



//ADD A REVIEW
router.post('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const {
        userId, businessId, rating, review
    } = req.body;

    const newRev = await Review.create({ userId, businessId, rating, review })
    const userRev = await Review.findByPk(newRev.id, {
        include: [User]

    })

    updateRating(businessId);

    return res.json(userRev);
}));

//EDIT A REVIEW
router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const {
        id, rating, review
    } = req.body;

    const editedReview = await Review.findByPk(id, {
        include: [User]
    })

    editedReview.rating = rating;
    editedReview.review = review;
    await editedReview.save();

    await updateRating(editedReview.businessId);

    return res.json(editedReview);
}));

//DELETE A REVIEW
router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const review = await Review.findByPk(id)
    const businessId = review.businessId;
    await review.destroy();

    await updateRating(businessId)

    return res.json(id);
}))




module.exports = router;
