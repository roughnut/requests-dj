const router = require('express').Router();

const eventRoutes = require('./eventRoutes');
const songRequestRoutes = require('./songReqRoutes');
const DJRoutes = require('./DJRoutes');

router.use('/djs', DJRoutes);
router.use('/events', eventRoutes);
router.use('/requests', songRequestRoutes);

module.exports = router;
