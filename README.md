const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:', 'defaultUsername', 'defaultPassword', {
    dialect: 'sqlite',
    host: 'localhost',
    define: {
        freezeTableName: true,
    },
});

const db = {};
const main = async () => {
    //Test the DB Connection
    console.log('start authen');
    await sequelize.authenticate();
    console.log('end authen');

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    // account model
    db.account = sequelize.define(
        'account',
        {
            accountId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
        },
        { timestamps: false, tableName: 'account', freezeTableName: true },
    );

    // thread model
    db.thread = sequelize.define(
        'thread',
        {
            threadId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            threadName: {
                type: Sequelize.STRING,
            },
            threadOfAccount: {
                type: Sequelize.INTEGER,
            },
        },
        { timestamps: false, tableName: 'thread', freezeTableName: true },
    );

    // post model
    db.post = sequelize.define(
        'post',
        {
            postId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            postTitle: {
                type: Sequelize.STRING,
            },
            postContent: {
                type: Sequelize.TEXT,
                unique: true,
            },
            postOnThread: {
                type: Sequelize.INTEGER,
            },
            postOfAccount: {
                type: Sequelize.INTEGER,
            },
        },
        { timestamps: false, tableName: 'post', freezeTableName: true },
    );

    //associations
    db.account.associate = (models) => {
        db.account.hasMany(models.post, {
            foreignKey: 'postOfAccount',
            as: 'posts',
        });
    };

    db.account.associate(db);

    db.post.associate = (models) => {
        db.post.belongsTo(models.account, {
            foreignKey: 'postOfAccount',
            as: 'account',
        });
        db.post.belongsTo(models.thread, {
            foreignKey: 'postOnThread',
            as: 'thread',
        });
    };
    db.post.associate(db);

    db.thread.associate = (models) => {
        db.thread.belongsTo(models.account, {
            foreignKey: 'threadOfAccount',
            as: 'account',
        });
        db.thread.hasMany(models.post, {
            foreignKey: 'postOnThread',
            as: 'posts',
        });
    };

    db.thread.associate(db);

    sequelize.sync();

    var start = async function () {
        const a = await db.account.create({ username: 'tt', password: '3' });
        await db.post.create({
            postTitle: 'tt',
            postContent: 'wer',
            // postOnThread: 3,
            postOfAccount: a.id,
        });
        const posts = await db.post.findAll({ include: ['thread'] });
        console.log(JSON.parse(JSON.stringify(posts)));

        const threads = await db.thread.findAll({ include: ['posts'] });
        console.log(JSON.parse(JSON.stringify(threads)));

        const accounts = await db.account.findAll({ include: ['posts'] });
        console.log(JSON.parse(JSON.stringify(accounts)));
    };

    start();
};
main();
module.exports = db;
