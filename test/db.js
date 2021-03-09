'use strick';


const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

describe('db', () => {

    it('User Test', async () => {
        // //Insert Mockup Data

        // await db.User.create({ name: 'Test User' })
        // await db.Review.create({ detail: 'Test Review', user_id: 1 })

        var r = await db.Review.findOne({
            where: {},
            include: ['user']
        });
        console.log(JSON.parse(JSON.stringify(r)))
    })
})