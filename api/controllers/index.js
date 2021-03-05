const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

let controllers = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(file => {
    // const model = sequelize['import'](path.join(__dirname, file));
    const controller = require(path.join(__dirname, file));
    controllers[file.replace(".js", "")] = controller;
  });

module.exports = controllers;