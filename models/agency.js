"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Agency extends Model {
        static associate(models) {
            // define association here
            // Agency.hasMany(models.User, { onDelete: 'CASCADE' });
            // Agency.belongsToMany(models.Customer, { onDelete: 'SET NULL', through: 'CustomerAgencies' });
        }
    }
    Agency.init({
        userId: DataTypes.INTEGER,
        profileId: DataTypes.STRING,
        orgId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: "agency",
        tableName: 'agency'
    });
    return Agency;
};