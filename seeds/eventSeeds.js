const { Event } = require('../models');

const eventData = [
    {
        name: "Milennium Party People",
        description: "Party like it's 1999!",
        date: "2024-07-07",
        dj_id: 5,
    }
];

const seedEvent = () => Event.bulkCreate(eventData, {
    individualHooks: true,
}) ;

module.exports = seedEvent;