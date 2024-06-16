const router = require("express").Router();
const { Event, SongRequest, User } = require("../../models");
const withAuth = require("../../utils/auth");

// // all song requests - this works but don't really need it
// router.get("/", withAuth, async (req, res) => {
//   try {
//     const requestsResponse = await SongRequest.findAll({
//       include: [
//         {
//           model: Event,
//           attributes: ["name"],
//         },
//         {
//           model: User,
//           attributes: ["username"],
//         },
//       ],
//     });

//     const eventRequests = requestsResponse.map((request) =>
//       request.get({ plain: true })
//     );

//     res.render("event", {
//       eventRequests,
//       logged_in: req.session.logged_in,
//       username: req.session.username,
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Could not get requests ", error: err });
//   }
// });

// Song requests for a specific event
router.get("/:id", withAuth, async (req, res) => {

  try {
    const eventResponse = await SongRequest.findAll({
      where: {
        event_id: req.params.id,
      },
      include: [
        {
          model: Event,
          attributes: ["name"],
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    
    const eventSongs = eventResponse.map((song) => song.get({plain:true}));

    const eventName = eventSongs[0].event.name;

    console.log(eventName);

    res.render("requests", {
      eventSongs,
      eventName,
      logged_in: req.session.logged_in,
      username: req.session.username,
    });

  } catch (error) {
    
  }

  });

// Posting a new song Request.
router.post("/", async (req, res) => {
  try {
    const newSongRequest = await SongRequest.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.json(newSongRequest);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deleting a song request
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const songReqData = await SongRequest.destroy({
      where: {
        id: req.params.id,
        user_id_id: req.session.user_id, 
      },
    });
    if (!songReqData) {
      res.status(404).json({ message: "404: Request not found" });
      return;
    }
    res.status(200).json(songReqData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
