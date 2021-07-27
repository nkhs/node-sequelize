'use strick';

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../models');

describe('db', () => {
    it('Insert', async () => {
        const posts = await db.post.findAll({ include: ['account', 'thread'] });
        console.log(JSON.parse(JSON.stringify(posts)));

        const threads = await db.thread.findAll({ include: ['account', 'posts'] });
        console.log(JSON.parse(JSON.stringify(threads)));

        const accounts = await db.account.findAll({ include: ['account', 'posts'] });
        console.log(JSON.parse(JSON.stringify(accounts)));

        return;
    });
});
