"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
    }
    user.init({
        name: { type: DataTypes.STRING, },
        img: { type: DataTypes.STRING, },
        description: { type: DataTypes.JSON, },
        age: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 50,
            },
        },
    }, {
        sequelize,
        modelName: "user",
        defaultScope: {
            attributes: { exclude: ["createdAt", "updatedAt"] }
        },
        hooks: {
            afterUpdate(instance, options) {
                console.log('after update')
                // let changed = instance._changed;
                // console.log(changed, options);

            }
        },
    });
    return user;
};