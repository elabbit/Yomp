const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { User, Business, Review } = require('../../db/models')

//GET RATING
router.get('/rating/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const bus = await Business.findByPk(req.params.id)

    return res.json(bus);
}));


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
        ownerId,
        phoneNumber,
        website
    } = req.body;


    const newBus = await Business.create({ title, description, address, city, state, zipcode, ownerId, phoneNumber, website })
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
        zipcode,
        phoneNumber,
        website
    } = req.body;

    editedBus.title = title;
    editedBus.description = description;
    editedBus.address = address;
    editedBus.city = city;
    editedBus.state = state;
    editedBus.zipcode = zipcode;
    editedBus.phoneNumber = phoneNumber;
    editedBus.website = website;
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

//GET TOP 3 MOST REVIEWED
router.get('/topreviewed', asyncHandler(async (req, res, next) => {


    const reviews = await Review.findAll();
    const data = reviews.map(rev => rev.businessId)

    const newObj = {};

    data.forEach(ele =>
        newObj[ele] = (newObj[ele] || 0) + 1)

    const newArr = Object.entries(newObj);


const sorted = newArr.sort((a,b) => b[1] - a[1])

const resultArr = sorted.slice(0,3)


    return res.json(resultArr);
}));


module.exports = router;
