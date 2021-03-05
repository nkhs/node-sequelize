'use strick';


const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

describe('db', () => {

    it('A B C', async () => {

        const whereCondition = {
            [Op.and]: [
                {
                    [Op.or]: [
                        { '$B.userId$': 100 },
                        { '$C.userId$': 100 }
                    ]
                },
                {
                    [Op.or]: [
                        { '$B.orgId$': 101 },
                        { '$C.orgId$': 102 }
                    ]
                },
                {
                    [Op.or]: [
                        { '$B.contentId$': 'content1' },
                        { '$C.profileId$': 'profileId1' }
                    ]
                }
            ]
        }
        let A = await db.A.findAll({
            include: ['B', 'C'],
            where: whereCondition
        });
        var aList = JSON.parse(JSON.stringify(A))
        console.log(aList)
        return
    })
})