const router = require('express').Router();
const { User, Event, SongRequest } = require('../models');
const { format } = require('date-fns');
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

		const events = eventList.map((event) => {
			const formatEvent = event.get({
			plain: true
		});
		if (formatEvent.date) {
			formatEvent.formattedDate = format(formatEvent.date, 'd MMMM, yyyy');
		}
		return formatEvent;
	});

	console.log(events);

		res.render('homepage', {
			events,
			logged_in: req.session.logged_in,
			username: req.session.username,
			userId: req.session.user_id,
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


  router.get("/events", withAuth, async (req, res) => {
	try {
	  const userData = await User.findByPk(req.session.user_id, {
		attributes: { exclude: ["password"] },
	  });
  
	  const user = userData.get({ plain: true });
  
	  res.render("newEvent", {
		...user,
		logged_in: true,
	  });
	} catch (err) {
	  console.error("Error creating new event:", err);
	  res
		.status(500)
		.json({
		  message: "An error occurred while loading the event creator",
		  error: err.message,
		});
	}
  });

router.get("/events/:id", async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: SongRequest,
          attributes: ["title", "artist"]
        },
      ],
    });

    if (!eventData) {
      res.status(404).json({ message: 'No event found with this id' });
      return;
    }

    const songData = await SongRequest.findAll({
      where: { 
        event_id: req.params.id, 
      },
      include: [{
        model: Event,
        attributes: ["id", "name"]
      },
	  {
		model: User,
		attributes: ["username"]
	  }]
    });

    const eventInfo = eventData.get({ plain: true });
    const songInfo = songData.map(song => song.get({ plain: true }));

    res.render("event", {
      eventInfo,
      songInfo,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// render song request form
router.get("/requests/:id", withAuth, async (req, res) => {
	try {
	  const getEvent = await Event.findByPk(req.params.id);
	  const event = getEvent.get({plain: true});
  
	  console.log(event.id);
  
		  res.render("song-request", {
			event,
			logged_in: req.session.logged_in,
			username: req.session.username,
		  });
  
	} catch (error) {
	  res.status(500).json(error);
	}
  
  });
// More homepage routes can be added here later

module.exports = router;