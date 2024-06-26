const router = require("express").Router();
const { Sequelize } = require("sequelize");
const { Event, SongRequest, User, Upvote } = require("../../models");
const withAuth = require("../../utils/auth");

// render song request form
router.get("/new/:id", withAuth, async (req, res) => {
  try {
    const getEvent = await Event.findByPk(req.params.id);
    const event = getEvent.get({plain: true});

    // console.log(event.id);

        res.render("song-request", {
          event,
          logged_in: req.session.logged_in,
          username: req.session.username,
        });

  } catch (error) {
    res.status(500).json(error);
  }

});

// // List of song requests for a specific event
// router.get("/:id", withAuth, async (req, res) => {

//   try {
//     const eventResponse = await SongRequest.findAll({
//       where: {
//         event_id: req.params.id,
//       },
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
//       attributes: {
//         include: [
//           // Literal query to count upvotes
//           [Sequelize.literal(`(
//             SELECT COUNT(*)
//             FROM Upvote
//             WHERE
//             Upvote.song_id = SongRequest.id
//             )`), 'upvoteCount']
//         ]
//       },
//     });
//     console.log('Event response: ', eventResponse);

//     const eventSongs = eventResponse.map((song) => song.get({plain:true}));
//     const eventName = eventSongs[0].event.name;
//     const eventInfo = {
//       name: eventSongs[0].event.name,
//       id: eventSongs[0].event_id,
//     }
// console.log('eventSongs: ', eventSongs);

//     res.render("requests", {
//       eventSongs,
//       eventInfo,
//       logged_in: req.session.logged_in,
//       username: req.session.username,
//     });

//   } catch (error) {
//     res.status(500).json(error);
//   }

//   });

// Posting a new song Request.

router.post("/", async (req, res) => {
  try {
    const newSongRequest = await SongRequest.create({
      title: req.body.songTitle,
      artist: req.body.artistName,
      event_id: req.body.eventId,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSongRequest);

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
