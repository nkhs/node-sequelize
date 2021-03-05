"use strict";
const db = require("../models");
module.exports = {
  up: async (queryInterface, Sequelize) => {

    // await queryInterface.bulkInsert('users', [{
    //   name: 'NKHS$$',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});

    await db.user.upsert({
      name: '123123123',
      password: '123456',
      confirmation: '123456'
    })

    // await db.user.upsert({
    //   name: '123123123',
    //   password: '123456',
    //   confirmation: '3456'
    // })


  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});

  }
};
