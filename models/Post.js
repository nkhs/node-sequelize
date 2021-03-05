"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
            this.hasMany(models.Other, {
                foreignKey: "postId",
                as: "other",
            });
        }
    }
    Post.init(
        {
            type: { type: DataTypes.STRING },

        },
        {
            sequelize,
            modelName: "Post",
        }
    );
    return Post;
};
