const Sequelize = require('sequelize')

const db = new Sequelize(`postgres://localhost:5432/$sonder`, {
  logging: false
})

module.exports = db
