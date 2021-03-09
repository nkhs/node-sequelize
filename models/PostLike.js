"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class PostLike extends Model {
        static associate(models) {
            this.belongsTo(models.Post, {
                foreignKey: "postId",
                as: "post",
            });
        }
    }

    PostLike.init({
        postId: { type: DataTypes.INTEGER },
    }, {
        sequelize,
        modelName: "PostLike",
    });
    return PostLike;
};
