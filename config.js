const { host } = require("pg/lib/defaults");

module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    db: {
        user: 'postgres',
        host: 'localhost',
        database: 'CSDB',
        password: '8t4jh1xZ6h139',
        port: '5432,'
    }
}