'use strick';


const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("../models");

describe('db', () => {

    it('Count Test', async () => {
        // //Insert Mockup Data
        // await db.Post.create({ type: 'test' })

        await db.PostLike.create({ postId: 1 })
        await db.PostLike.create({ postId: 1 })
        await db.PostLike.create({ postId: 1 })
        await db.PostLike.create({ postId: 1 })
        await db.PostLike.create({ postId: 1 })
        await db.PostLike.create({ postId: 1 })
        await db.PostLike.create({ postId: 1 })
        await db.PostLike.create({ postId: 1 })


        var post = await db.Post.findAll({
            attributes: [
                'id',
                [db.Sequelize.fn('COUNT', db.Sequelize.col('postlikes.id')), 'likeCount',],
            ],
            include: ['postlikes']
        })
        console.log(JSON.parse(JSON.stringify(post)))
        process.exit()
    })
})