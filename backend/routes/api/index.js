// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const businessRouter = require('./business')
const reviewRouter = require('./review')


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/business', businessRouter);
router.use('/review', reviewRouter);


router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
