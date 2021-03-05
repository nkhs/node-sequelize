"use strict";

const db = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert("Products", [
    //   {
    //     name: 'Product 1'
    //   },
    // ], {});

    // await queryInterface.bulkInsert("Files", [
    //   {
    //     name: 'File 1'
    //   },
    // ], {});

    // var p = await db.Product.findOne();
    // var f = await db.File.findOne();

    // await queryInterface.bulkInsert("Product_Files", [
    //   {
    //     productId: p.id,
    //     fileId: f.id,
    //   },
    // ], {});


  },

  down: async (queryInterface, Sequelize) => {
  }
};
