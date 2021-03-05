"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Other extends Model {
        static associate(models) {

        }
    }
    Other.init({
        type: { type: DataTypes.STRING },
        postId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: "Other",
    });
    return Other;
};
