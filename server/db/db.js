const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const dbName = pkg.name
console.log(`============= OPENING DATABASE CONNECTION TO ${dbName} =============`)

const db = new Sequelize(`postgres://localhost:5432/${dbName}`,{logging: false})

module.exports = db
