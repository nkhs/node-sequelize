"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product_File extends Model {
    }
    Product_File.init({
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Products',
                key: 'id',
            },
        },
        fileId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Files',
                key: 'id',
            }
        },
    }, {
        sequelize,
        modelName: "Product_File",
    });
    return Product_File;
};