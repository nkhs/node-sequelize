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
        Name: { type: DataTypes.STRING },
        Phone: { type: DataTypes.STRING },
        Email: { type: DataTypes.STRING },
    }, {
        sequelize,
        modelName: "File",
    });
    File.sync().catch((err) => console.error(err));
    return File;
};
