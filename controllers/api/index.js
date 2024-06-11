const router = require('express').Router();

const eventRoutes = require('./eventRoutes');
const songRequestRoutes = require('./songReqRoutes');
const userRoutes = require('./userRoutes');

router.use('/events', eventRoutes); // Base file added but nothing there yet
router.use('/requests', songRequestRoutes); // Base file added but nothing there yet
router.use('/users', userRoutes);

module.exports = router;
