"use strict";

const db = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("B", [
      {
        userId: 100,
        orgId: 101,
        contentId: 'content1'
      },
    ], {});

    await queryInterface.bulkInsert("C", [
      {
        profileId: 'profileId1',
        orgId: '102',
        userId: '100'
      },
    ], {});

    var b = await db.B.findOne();
    var c = await db.C.findOne();

    await queryInterface.bulkInsert("A", [
      {
        bId: b.id,
        cId: c.id,
      },
    ], {});


  },

  down: async (queryInterface, Sequelize) => {
  }
};
