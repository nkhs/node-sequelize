'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
        // toJSON(){
        //   return {...this.get(), id: undefined}
        // }
    }
    post.init(
        {
            postId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            postTitle: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            postOnThread: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            postOfAccount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'post',
            modelName: 'post',
        },
    );

    post.associate = (models) => {
        post.belongsTo(models.thread, {
            foreignKey: 'postOnThread',
            as: 'thread',
        });
        post.belongsTo(models.account, {
            foreignKey: 'postOfAccount',
            as: 'account',
        });
    };

    return post;
};
