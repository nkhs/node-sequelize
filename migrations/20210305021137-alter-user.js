'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.addColumn('users', 'password', { type: DataTypes.STRING, })
    await queryInterface.addColumn('users', 'confirmation', { type: DataTypes.STRING, })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
