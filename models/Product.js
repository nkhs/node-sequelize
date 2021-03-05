"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            this.belongsToMany(models.File, {
                foreignKey: 'productId',
                otherKey: 'fileId',
                through: models.Product_File,
                as: 'file'
            });
        }
    }
    Product.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            category_id: DataTypes.INTEGER,
            references: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    Product.sync().catch((err) => console.error(err));
    return Product;
};
