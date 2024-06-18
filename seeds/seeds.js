const sequelize = require('../config/connection');
const seedUsers = require('./userSeeds');
const seedEvent = require('./eventSeeds');
const seedSongs = require('./songSeeds');
const seedUpvotes = require('./upvoteSeeds');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log("\n ---DATABASE SYNCED---\n");

    await seedUsers();
    console.log("\n---Users SEEDED---\n");

    await seedEvent();
    console.log("\n---EVENT SEEDED---\n");

    await seedSongs();
    console.log("\n---SONGS SEEDED---\n");

    await seedUpvotes();
    console.log('\n---UPVOTES SEEDED---\n');

    process.exit(0);

};

seedAll();