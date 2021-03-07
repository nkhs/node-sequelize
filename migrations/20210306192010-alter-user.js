'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.addColumn('users', 'age', { type: DataTypes.INTEGER })
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
