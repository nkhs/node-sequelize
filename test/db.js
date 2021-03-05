'use strick';


const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

describe('db', () => {

    it('SUM', async () => {

        var list = await db.Post.findAll({
            where: {
                type: 'random',
            },
            attributes: [
                'id',
                'createdAt',
                [Sequelize.fn('SUM', Sequelize.col('other.amount')), 'totalAmount'],
            ],
            include: [
                {
                    model: db.Other,
                    attributes: [],
                    required: false,
                    duplicating: false,
                    as: 'other',
                    where: {
                        amount: { [Op.gte]: 0 }
                    }
                },
            ],
            order: [['createdAt', 'DESC']],
            raw: true,
            group: ['Post.id'],
        });
        console.log(JSON.parse(JSON.stringify(list)))
        return
    })
})