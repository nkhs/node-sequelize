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
            validate: {
                notNull: false, // this is boolean
                areEquals(value) {
                    console.log(value)
                    if (value !== this.password) {
                        throw new Error("Not Equals");
                    }
                }
            },
        },
        password: { type: DataTypes.STRING },
        confirmation: {
            type: DataTypes.STRING,
            validate: {
                notNull: false, // this is boolean
                areEquals: (value) => {
                    // var tt = JSON.parse(JSON.stringify(this.password))
                    console.log(this.password)
                    // console.log(value, this.password, value != this.password, typeof value, typeof this.password, value.length, this.password.length,)
                    
                    if (value != this.password) {
                        console.log('**')
                        throw new Error("Not Equals");
                    }

                    return true
                }
            },
        },

    }, {
        sequelize,
        modelName: "user",
        defaultScope: {
            attributes: { exclude: ["createdAt", "updatedAt"] }
        }
    });
    return user;
};