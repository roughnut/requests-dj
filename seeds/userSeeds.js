const { User } = require('../models');

const userData = [
  {
    username: "DanceQueen",
    password: "starDust2023!",
    is_dj: false,
  },
  {
    username: "LikeNobodysWatchin",
    password: "retroWave1984#",
    is_dj: false,
  },
  {
    username: "onDaFloor",
    password: "cyberSailor2077$",
    is_dj: false,
  },
  {
    username: "DanceMonkey",
    password: "lightSpeed2021^",
    is_dj: false,
  },
  {
    username: "BoogieBoy",
    password: "quantumLeap2121&",
    is_dj: false,
  },
  {
    username: "DJ Frankalicious",
    password: "groove123!",
    is_dj: true,
  },
  {
    username: "DownBeat Daniela",
    password: "mixitup456!",
    is_dj: true,
  },
  {
    username: "Rhythm Rhianna",
    password: "breakbeat789!",
    is_dj: true,
  },
  {
    username: "Bass Vampire",
    password: "deepbass101!",
    is_dj: true,
  },
  {
    username: "Groove Mechanic",
    password: "fixthefunk202!",
    is_dj: true,
  },
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
});

module.exports = seedUsers;