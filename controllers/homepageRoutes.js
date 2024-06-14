const router = require('express').Router();
const { User, Event, SongRequest } = require('../models');
const withAuth = require('../utils/auth'); // Added but unused as of now

// router to get the events.
router.get('/', async (req, res) => {
	try {
		const eventList = await Event.findAll(
			{
			include: [{
				model: User,
				attributes: ['username'],
			}]
		}
	);

		const events = eventList.map((event) => event.get({
			plain: true
		}));

		console.log(events);

		res.render('homepage', {
			events,
			logged_in: req.session.logged_in,
			username: req.session.username
		});
	} catch (err) {
		res.status(500).json(err);
	}
});



// This will handle the route when going to log in, if already logged in, it will take us back to the homepage
router.get("/login", (req, res) => {
	if (req.session.logged_in) {
	  res.redirect("/");
	  return;
	}
  
	res.render("login");
  });

  // This will handle the route when going to sign up, if already logged in, it will take us to the homepage
router.get("/signUp", (req, res) => {
	if (req.session.logged_in) {
	  res.redirect("/");
	  return;
	}
	res.render("signUp");
  });
  
// More homepage routes can be added here later

module.exports = router;