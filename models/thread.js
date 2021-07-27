'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class thread extends Model {
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
    thread.init(
        {
            threadId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            threadName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            threadOfAccount: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: 'account',
            },
        },
        {
            sequelize,
            tableName: 'thread',
            modelName: 'thread',
        },
    );

    thread.associate = (models) => {
        thread.belongsTo(models.account, {
            foreignKey: 'threadOfAccount',
            as: 'account',
        });
        thread.hasMany(models.post, {
            foreignKey: 'postOnThread',
            as: 'posts',
        });
    };

    return thread;
};
