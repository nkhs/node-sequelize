'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("customer", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        }
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        }
      },
      phone: {
        type: DataTypes.INTEGER,
      },
      language: {
        type: DataTypes.STRING,
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customer');
  }
};
