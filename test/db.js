'use strick';


const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

describe('db', () => {

    it('User Test', async () => {
        // //Insert Mockup Data


        // await db.Profile.create({ name: 'Test Profile' })
        // await db.User.create({ ProfileId: 1 })


        var u = await db.User.findAll({ include: ['profile'] })
        console.log(JSON.parse(JSON.stringify(u)))
    })

    it('Check ProfileId: default value', async () => {
        // //Insert Mockup Data
        var u = await db.User.create({ name: 'Test User' })

        console.log(JSON.parse(JSON.stringify(u)))

    })
})