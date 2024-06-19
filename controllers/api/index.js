const router = require('express').Router();

const eventRoutes = require('./eventRoutes');
const songRequestRoutes = require('./songReqRoutes');
const userRoutes = require('./userRoutes');
const upvoteRoutes = require('./upvoteRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/requests', songRequestRoutes);
router.use('/upvotes', upvoteRoutes);

module.exports = router;
