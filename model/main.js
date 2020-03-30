const {Sequelize} = require('sequelize');
const sequelize = require('../utils/database');
const test = sequelize.define('test',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    }
});
module.exports = test;