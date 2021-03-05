'use strick';


const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

describe('db', () => {

    it('Check Product: m:n relationship', async () => {

        let A = await db.Product.findAll({
            include: ['file'],
        });
        var aList = JSON.parse(JSON.stringify(A))
        console.log(aList)
        return
    })
})