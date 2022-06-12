import pkg from 'pg'
import { Sequelize } from 'sequelize';
const { Pool } = pkg;
import { db } from '../config.js';


async function getConnection(){
    const client = new Pool({
        user: db.user,
        host: db.host,
        database: db.database,
        password: db.password,
        port: db.port
    });

    await Pool.connect();
    return Pool;
}

const SequelizeClient = new Sequelize(db.database, db.user, db.password,{
    host: db.host,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
});

SequelizeClient.authenticate()
    .then(() => {
        console.log('Conectado');
    })
    .catch(() => {
        console.log('No conectado');
    })

export const getData = { getConnection, SequelizeClient };