const { Guest } = require("../models");

const guestData = [
  {
    username: "DanceQueen",
    password: "starDust2023!",
  },
  {
    username: "LikeNobodysWatchin",
    password: "retroWave1984#",
  },
  {
    username: "onDaFloor",
    password: "cyberSailor2077$",
  },
  {
    username: "DanceMonkey",
    password: "lightSpeed2021^",
  },
  {
    username: "BoogieBoy",
    password: "quantumLeap2121&",
  },
];

const seedGuests = () => Guest.bulkCreate(guestData, {
    individualHooks: true,
});

module.exports = seedGuests;
