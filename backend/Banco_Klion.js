const Sequelize = require('sequelize')
const sequelize = new Sequelize('klion_data', 'root', 'master', {
    host: "localhost",
    dialect: 'mysql'
})

//exportação do app
module.exports = sequelize