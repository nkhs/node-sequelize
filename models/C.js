"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class C extends Model {
        static associate(models) {
            // define association here
        }
    }
    C.init({
        userId: DataTypes.INTEGER,
        profileId: DataTypes.STRING,
        orgId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: "C",
        timestamps: false,
        tableName: 'C'
    });
    return C;
};