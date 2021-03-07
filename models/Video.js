"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Video extends Model {
    }
    Video.init({
        title: { type: DataTypes.STRING, },
    }, {
        sequelize,
        modelName: "Video",
        defaultScope: {
            attributes: { exclude: ["createdAt", "updatedAt"] }
        },
    });
    return Video;
};