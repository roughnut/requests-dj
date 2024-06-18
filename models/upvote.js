const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Upvote extends Model {}

Upvote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'songrequest',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'upvote',
        uniqueKeys: {
            unique_upvote: {
                fields: ['user_id', 'song_id']
            }
        }
    }
);

module.exports = Upvote;