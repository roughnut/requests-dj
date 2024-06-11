const router = require('express').Router();

const eventRoutes = require('./eventRoutes');
const songRequestRoutes = require('./songReqRoutes');
const DJRoutes = require('./DJRoutes');

router.use('/djs', DJRoutes);
router.use('/events', eventRoutes); // Base file added but nothing there yet
router.use('/requests', songRequestRoutes); // Base file added but nothing there yet

module.exports = router;
