const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { User, Business, Review } = require('../../db/models')


//GET ALL BUSINESSES
router.get('/', asyncHandler(async (req, res, next) => {
    const businesses = await Business.findAll({
        include: [User]
    });
    return res.json(businesses);
}));


//ADD A BUSINESS
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


    const newBus = await Business.create({ title, description, address, city, state, zipcode, ownerId })
    const userBus = await Business.findByPk(newBus.id, {
        include: [User]
    })
    return res.json(userBus);
}));

//EDIT A BUSINESS
router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const editedBus = await Business.findByPk(req.params.id, {
        include: [User]
    })

    const {
        title,
        description,
        address,
        city,
        state,
        zipcode
    } = req.body;

    editedBus.title = title;
    editedBus.description = description;
    editedBus.address = address;
    editedBus.city = city;
    editedBus.state = state;
    editedBus.zipcode = zipcode;
    await editedBus.save();

    return res.json(editedBus);
}));

//DELETE A BUSINESS
router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const business = await Business.findByPk(id)
    await business.destroy();
    return res.json(id)
}))



module.exports = router;
