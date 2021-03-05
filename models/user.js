"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
    }
    user.init({
        name: { type: DataTypes.STRING, },
        img: { type: DataTypes.STRING, },
    }, {
        sequelize,
        modelName: "user",
        defaultScope: {
            attributes: { exclude: ["createdAt", "updatedAt"] }
        }
    });
    return user;
};