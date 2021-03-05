"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class game extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            game.belongsTo(models.user, {
                foreignKey: "playerId",
                as: "player",
            });

            game.belongsTo(models.user, {
                foreignKey: "leaderId",
                as: "leader",
            });
        }
    }
    game.init({
        leaderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        playerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            }
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'running',
        },
        notes: {
            type: DataTypes.TEXT,
        }
    }, {
        sequelize,
        modelName: "game",
        defaultScope: {
            attributes: { exclude: ["createdAt", "updatedAt"] }
        }
    });
    return game;
};