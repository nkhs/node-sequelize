"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class A extends Model {
        static associate(models) {
            // define association here
            this.belongsTo(models.B, {
                foreignKey: "bId",
                as: "B",
            });
            this.belongsTo(models.C, {
                foreignKey: "cId",
                as: "C",
            });

        }
    }
    A.init({
        bId: DataTypes.INTEGER,
        cId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "A",
        timestamps: false,
        tableName: 'A'
    });
    return A;
};