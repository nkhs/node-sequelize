'use strick';


const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

describe('db', () => {
    it('insert', async () => {
        let createPost = await db.user.create({
            name: 'test'
        });
        var user = JSON.parse(JSON.stringify(createPost))
        console.log(user, user.id)
    })
})