const router = require('express').Router();

const eventRoutes = require('./eventRoutes');
const songRequestRoutes = require('./songReqRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/requests', songRequestRoutes);

module.exports = router;
