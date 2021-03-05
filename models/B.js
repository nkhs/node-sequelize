"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class B extends Model {
        static associate(models) {
            // define association here
        }
    }
    B.init({
        orgId: DataTypes.INTEGER,
        contentId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "B",
        timestamps: false,
        tableName: 'B'
    });
    return B;
};