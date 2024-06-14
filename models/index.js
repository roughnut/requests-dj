const User = require('./user');
const Event = require('./event');
const SongRequest = require('./songRequest');

User.hasMany(Event, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Event.belongsTo(User, {
    foreignKey: 'user_id',
});

Event.hasMany(SongRequest, {
    foreignKey: 'event_id',
    onDelete: 'CASCADE',
});

SongRequest.belongsTo(Event, {
    foreignKey: 'event_id'
});

User.hasMany(SongRequest, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

SongRequest.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Event, SongRequest }; 