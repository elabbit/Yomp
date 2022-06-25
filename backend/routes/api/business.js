const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const {User, Business } = require('../../db/models')


//GET ALL BUSINESSES
router.get('/', asyncHandler(async (req, res, next) => {
    const businesses = await Business.findAll({
        include:[User]
    });
    return res.json(businesses);
}));

router.post('/', asyncHandler(async (req, res, next) => {
const {
    title,
    description,
    address,
    city,
    state,
    zipcode,
    ownerId
    } = req.body;


const newBus = await Business.create({title, description, address, city, state, zipcode, ownerId})
const userBus = await Business.findByPk(newBus.id, {
    include:[User]
})
return res.json(userBus);

}));


module.exports = router;
