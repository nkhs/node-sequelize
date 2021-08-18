'use strick';

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../models');

describe('db', () => {
    it('insert', async () => {
        // let createPost = await db.user.create({
        //     name: 'test'
        // });
        // var user = JSON.parse(JSON.stringify(createPost))
        // console.log(user, user.id)
        let sql = 'select * from users';
        let records = await db.sequelize.query(sql, {
            // replacements: {
            //     userId: userId,
            //     gameId: gameId,
            // },
            type: Sequelize.QueryTypes.SELECT,
        });
        console.log(records);
    });
});
