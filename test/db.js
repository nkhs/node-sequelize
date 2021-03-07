'use strick';


const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

describe('db', () => {

    it('HOOK Test', async () => {

        // const [isUpdated] = await db.user.update(
        //     { name: 'kk' },
        //     { where: { id: 1 }, individualHooks: true }
        // );
        await db.user.upsert({
            name: 'kg',
            img: 'image',

            age: -5
        })

        // var B = await db.B.findAll({
        //     limit: 2,
        //     include: [{
        //         model: db.A,
        //         as: 'A',
        //         required: false,
        //         limit: 2,
        //     }
        //     ]
        // })
        // console.log(JSON.parse(JSON.stringify(B)))
    })
})