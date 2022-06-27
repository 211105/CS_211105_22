import { getData } from './db.js';
import { DataTypes } from 'sequelize';
import { getUser } from './User.js';
import { getSon } from './Son.js';
//add sequalize add

const Father = getData.sequelizeClient.define('cat_fathers', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    fatherSurname: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    motherSurname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false,
    }

});

Father.hasMany(getSon, {
    foreignKey: 'catFatherId'
});
getSon.belongsTo(Father);

export const getFather = Father;