const router = require('express').Router();

// Linking the connection with the index files of the respective connections.
const apiRoutes = require('./api');
const homepageRoutes = require('./homepageRoutes');

// route connection for the api and homepage routes.
router.use('/api', apiRoutes);
router.use('/', homepageRoutes);

module.exports = router;