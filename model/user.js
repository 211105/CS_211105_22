import { getData } from './db.js';
import { DataTypes } from 'sequelize';
import Sequelize from 'sequelize';
import bcrypt from 'bcrypt';
import { getFather } from './Father.js';


const User = getData.sequelizeClient.define('cat_users', {
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
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'cat_users',
    freezeTableName: true,
    hooks: {
        beforeCreate: (user, options) => {
            {
                user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password, 10) : "";
            }
        }
    }

});

User.hasMany(getFather, {
    foreignKey: 'catUserId'
});

getFather.belongsTo(User);


export const getUser = User;