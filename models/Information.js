"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Information extends Model {
        static associate(models) {
        }
    }
    Information.init({
        Name: { type: DataTypes.STRING },
        Phone: { type: DataTypes.STRING },
        Email: { type: DataTypes.STRING },
    }, {
        sequelize,
        modelName: "Information",
        tableName: 'informations'
    });
    return Information;
};
