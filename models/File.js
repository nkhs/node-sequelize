"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class File extends Model {
        static associate(models) {
            this.belongsToMany(models.File, {
                foreignKey: 'productId',
                otherKey: 'fileId',
                through: models.Product_File,
                as: 'file'
            })
        }
    }
    File.init({
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        url: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "File",
    });
    File.sync().catch((err) => console.error(err));
    return File;
};
