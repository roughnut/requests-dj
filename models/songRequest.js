const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class SongRequest extends Model {}

SongRequest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "event",
        key: "id",
      },
    },
    guest_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "guest",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "songrequest",
  }
);

module.exports = SongRequest;
