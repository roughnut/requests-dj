const { SongRequest } = require('../models');

const songData = [
  {
    id: 1,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    event_id: 1,
    user_id: 1, 
  },
  {
    id: 2,
    title: "Can't Stop the Feeling!",
    artist: "Justin Timberlake",
    event_id: 1,
    user_id: 2, 
  },
  {
    id: 3,
    title: "Dancing Queen",
    artist: "ABBA",
    event_id: 1,
    user_id: 1, 
  },
  {
    id: 4,
    title: "Smooth Criminal",
    artist: "Michael Jackson",
    event_id: 1,
    user_id: 3, 
  },
  {
    id: 5,
    title: "Get Lucky",
    artist: "Daft Punk",
    event_id: 1,
    user_id: 4, 
  },
  {
    id: 6,
    title: "September",
    artist: "Earth, Wind & Fire",
    event_id: 1,
    user_id: 1, 
  },
];

const seedSongs = () => SongRequest.bulkCreate(songData, {
    individualHooks: true,
});

module.exports = seedSongs;