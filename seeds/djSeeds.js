const { DJ } = require("../models");

const djData = [
  {
    username: "DJ Frankalicious",
    password: "groove123!",
  },
  {
    username: "DownBeat Daniela",
    password: "mixitup456!",
  },
  {
    username: "Rhythm Rhianna",
    password: "breakbeat789!",
  },
  {
    username: "Bass Vampire",
    password: "deepbass101!",
  },
  {
    username: "Groove Mechanic",
    password: "fixthefunk202!",
  },
];

const seedDJs = () =>
  DJ.bulkCreate(djData, {
    individualHooks: true,
  });

module.exports = seedDJs;
