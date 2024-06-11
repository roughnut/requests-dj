const sequelize = require('../config/connection');
const seedDJs = require('./djSeeds');
const seedEvent = require('./eventSeeds');
const seedGuests = require('./guestSeeds');
const seedSongs = require('./songSeeds');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log("\n ---DATABASE SYNCED---\n");

    await seedDJs();
    console.log("\n---DJS SEEDED---\n");

    await seedEvent();
    console.log("\n---EVENT SEEDED---\n");

    await seedGuests();
    console.log("\n---GUESTS SEEDED---\n");

    await seedSongs();
    console.log("\n---SONGS SEEDED---\n");

    process.exit(0);

};

seedAll();