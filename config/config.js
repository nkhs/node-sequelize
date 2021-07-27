require('dotenv').config();
const config = {
    dbConfig: {
        dialect: process.env.DbDialect,

        logging: false,
        database: process.env.DbName,
        host: process.env.DbHost,
        username: process.env.DbUserName,
        password: process.env.DbPassword,
        storage: 'db.sqlite',
        define: {
            timestamps: false,
        },
        replication: {
            read: [
                {
                    host: process.env.DbHost,
                    username: process.env.DbUserName,
                    password: process.env.DbPassword,
                },
            ],
            write: {
                host: process.env.DbHost,
                username: process.env.DbUserName,
                password: process.env.DbPassword,
            },
        },
        pool: {
            max: 20,
            idle: 30000,
        },
    },
};
module.exports = config;
