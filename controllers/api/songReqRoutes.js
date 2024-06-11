const router = require('express').Router();
const { SongRequest } = require('../../models');
const withAuth = require('../../utils/auth');

// Check all song requests for all events
router.get('/', (req,res) => {
    SongRequest.findAll({})
    .then(songReqData => res.json(songReqData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

// Check a specific song request by request id
router.get("/:id", (req, res) => {
    SongRequest.findAll({
      where: {
        id: req.params.id,
      },
    })
      .then((songReqData) => res.json(songReqData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Posting a new song Request.
router.post("/", async (req, res) => {
  try {
    const newSongRequest = await SongRequest.create({
      ...req.body,
      dj_id: req.session.user_id, //Might need to be changed to dj_id
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
          dj_id: req.session.user_id, //Might need to be changed to dj_id
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