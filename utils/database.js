const {Sequelize} =require('sequelize');
const sequelize = new Sequelize('test','newuser','1234',{
    host:'localhost',
    dialect:'mysql'
});
module.exports = sequelize;