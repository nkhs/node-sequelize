'use strick';


const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

describe('db', () => {

    it('Count Test', async () => {
        //`SELECT videos.*, COUNT(*) AS views FROM views INNER JOIN videos WHERE views.videoId = videos.id GROUP BY videoId ORDER BY views DESC`


        // //Insert Test Data
        // // await db.Video.create({ title: 'k1' })
        // await db.View.create({ videoId: 1 })
        // await db.View.create({ videoId: 1 })
        // await db.View.create({ videoId: 1 })
        // await db.View.create({ videoId: 1 })
        // await db.View.create({ videoId: 1 })
        // await db.View.create({ videoId: 1 })
        // await db.View.create({ videoId: 1 })
        // await db.View.create({ videoId: 1 })


        var v = await db.View.findAll({
            attributes: [
                [Sequelize.fn(`COUNT`, Sequelize.col("videoId")), 'count'],
            ],
            // group: ['videoId'],
            include: ['video']
        })
        console.log(JSON.parse(JSON.stringify(v)))
        process.exit()
    })
})