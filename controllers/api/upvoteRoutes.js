const router = require("express").Router();
const { Upvote } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const { songId } = req.body;

    // Check if the user has already upvoted this song
    const existingUpvote = await Upvote.findOne({
      where: {
        song_id: songId,
        user_id: req.session.user_id,
      },
    });

    if (existingUpvote) {
      return res
        .status(400)
        .json({ message: "You have already upvoted this song." });
    }

    const upvoting = await Upvote.create({
      song_id: songId,
      user_id: req.session.user_id,
    });

    res.status(200).json(upvoting);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({
        error:
          "There was either a problem with upvoting, or you have already upvoted this song.",
      });
  }
});

module.exports = router;
