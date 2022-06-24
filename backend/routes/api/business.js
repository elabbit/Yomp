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



module.exports = router;
