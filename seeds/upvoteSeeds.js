const { Upvote } = require('../models');

const upvoteData = [
  { user_id: 1, song_id: 1 },
  { user_id: 2, song_id: 1 },
  { user_id: 3, song_id: 1 },
  { user_id: 4, song_id: 1 },
  { user_id: 5, song_id: 1 },
  { user_id: 1, song_id: 2 },
  { user_id: 2, song_id: 2 },
  { user_id: 3, song_id: 2 },
  { user_id: 4, song_id: 2 },
  { user_id: 6, song_id: 3 },
  { user_id: 7, song_id: 3 },
  { user_id: 8, song_id: 3 },
  { user_id: 9, song_id: 4 },
  { user_id: 10, song_id: 4 },
  { user_id: 6, song_id: 5 },
  { user_id: 7, song_id: 6 },
  { user_id: 8, song_id: 6 },
];

const seedUpvotes = () =>
  Upvote.bulkCreate(upvoteData, {
    individualHooks: true,
  });

module.exports = seedUpvotes;