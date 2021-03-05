'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.renameColumn('Drisk', 'question ', 'pr_question')
  },

  down: async (queryInterface, Sequelize) => {
  }
};
