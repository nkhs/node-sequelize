"use strict";
const db = require(__dirname + "/../../models");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

  create: async (req, res, next) => {
    db.game.upsert(req.body)
      .then(resp => res.send(resp))
      .catch(error => res.send({ status: false, error: error }))
  },
  delete: async (req, res, next) => {
    db.game.destroy({ where: { id: req.params.id } })
      .then(resp => res.send(resp))
      .catch(error => res.send({ status: false, error: error }))
  },
  list: async (req, res, next) => {
    db.game.findAll({ include: ['player'] })
      .then(resp => res.send(resp))
      .catch(error => res.send({ status: false, error: error }))
  },

};