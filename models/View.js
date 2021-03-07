"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class View extends Model {
        static associate(models) {
            this.hasMany(models.Video, {
                foreignKey: 'videoId',
                as: 'video'
            });
        }
    }
    View.init({
        videoId: { type: DataTypes.INTEGER, },
    }, {
        sequelize,
        modelName: "View",
        defaultScope: {
            attributes: { exclude: ["createdAt", "updatedAt"] }
        },
    });
    return View;
};