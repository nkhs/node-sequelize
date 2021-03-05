"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    user.init({
        name: {
            type: DataTypes.STRING,
        },
        password: { type: DataTypes.STRING },
        confirmation: { type: DataTypes.STRING, },
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