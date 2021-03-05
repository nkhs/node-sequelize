"use strict";
const config = require(__dirname + "/../config/config")[process.env.Environment];
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.database, null, null, config);
module.exports = {
  sequelize
};