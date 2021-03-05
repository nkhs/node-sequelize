"use strict";
const db = require(__dirname + "/../../models");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

  create: async (req, res, next) => {
    try {
      const query = `INSERT INTO games (status, leaderId, playerId) VALUES ('Runnibg', 1, 1)`;
      const [id, success] = await db.sequelize.query(query, { returning: true, type: Sequelize.QueryTypes.INSERT });
      console.log(id, success)
      res.send({ status: true, data: id })
    } catch (error) {
      console.log(error)
      res.send({ status: false, error: error })
    }
    // db.game.upsert(req.body)
    //   .then(resp => res.send(resp))
    //   .catch(error => res.send({ status: false, error: error }))
  },
  delete: async (req, res, next) => {
    db.game.destroy({ where: { id: req.params.id } })
      .then(resp => res.send(resp))
      .catch(error => res.send({ status: false, error: error }))
  },
  list: async (req, res, next) => {
    db.game.findAll({
      // include: ['player'],
      attributes: [
        'id',
        'createdAt',
        'updatedAt',
        [Sequelize.fn('TIMESTAMPDIFF', Sequelize.literal('SECOND'), Sequelize.col("createdAt"), Sequelize.col("updatedAt")), 'timePlayed']

      ]
    })
      .then(resp => res.send(resp))
      .catch(error => res.send({ status: false, error: error }))


    // db.Session.findAll({
    //   // createdAt: sequelize.literal('createdAt * 100000'),
    //   // updatedAt: sequelize.literal('updatedAt * 100000'),
    //   attributes: [
    //     'id',
    //     'createdAt',
    //     'updatedAt',
    //     [Sequelize.fn('time', Sequelize.col('updatedAt')), 'updatedAtHour'],
    //     [Sequelize.fn('date_format', Sequelize.col('createdAt'), '%Y-%m-%d %H:%m:%S'), 'date_formed'],
    //     // [Sequelize.literal('(updatedAt - createdAt)'), 'timePlayed']
    //   ]
    // })
    //   .then((sessions) => {
    //     sessions = JSON.parse(JSON.stringify(sessions))
    //     sessions = sessions || []
    //     sessions = sessions.map(item => {
    //       item.timePlayed = new Date(item.updatedAt).getTime() - new Date(item.createdAt).getTime()
    //       return item;
    //     })
    //     res.json(sessions);
    //   })
    //   .catch((err) => res.json(err));
  }

};