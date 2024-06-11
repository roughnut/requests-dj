const DJ = require('./dj');
const Event = require('./event');
const Guest = require('./guest');
const SongRequest = require('./songRequest');

DJ.hasMany(Event, {
    foreignKey: 'dj_id',
    onDelete: 'CASCADE',
});

Event.belongsTo(DJ, {
    foreignKey: 'dj_id',
});

Event.hasMany(SongRequest, {
    foreignKey: 'event_id',
    onDelete: 'CASCADE',
});

SongRequest.belongsTo(Event, {
    foreignKey: 'event_id'
});

Guest.hasMany(SongRequest, {
    foreignKey: 'guest_id',
    onDelete: 'CASCADE',
});

SongRequest.belongsTo(Guest, {
    foreignKey: 'guest_id'
});

module.exports = { DJ, Guest, Event, SongRequest }; 