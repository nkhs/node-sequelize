'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("A", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      bId: DataTypes.INTEGER,
      cId: DataTypes.INTEGER,

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('A');
  }
};
