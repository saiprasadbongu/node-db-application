var sequelize = require("../connections/sequelizedb")
const Sequelize = require('sequelize');



var User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    mobileNumber: {
        type: Sequelize.STRING,
        field: 'mobile_number'
    },
    status: {
        type: Sequelize.STRING
    },
}, {freezeTableName: true});


var UsersContactsLists = sequelize.define('users_contacts_lists', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        field: 'user_id'
    },
    mobileNumber: {
        type: Sequelize.STRING,
        field: 'mobile_number', defaultValue: 0
    }
}, {freezeTableName: true});


User.sync();
UsersContactsLists.sync();



