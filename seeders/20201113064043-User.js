"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('users', [{
      name: 'NKHS',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});

  }
};
