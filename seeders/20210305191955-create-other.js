"use strict";

const db = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Posts", [
      {
        type: 'random'
      },
    ], {});
    var p = await db.Post.findOne();
    await queryInterface.bulkInsert("Others", [
      {
        postId: p.id,
        amount: 10
      },
      {
        postId: p.id,
        amount: 10
      },
      {
        postId: p.id,
        amount: 10
      },
      {
        postId: p.id,
        amount: -10
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {
  }
};
