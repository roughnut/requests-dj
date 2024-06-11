const router = require('express').Router();
const { DJ, Event, Guest, SongRequest } = require('../models');
const withAuth = require('../utils/auth'); // Added but unused as of now

router.get('/', async (req, res) => {
	try {
		const eventList = await Event.findAll();

		const events = eventList.map((event) => event.get({
			plain: true
		}));

		res.render('homepage', {
			events,
			logged_in: req.session.logged_in,
			username: req.session.username
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// More homepage routes can be added here later

module.exports = router;