const Sequelize = require('sequelize')
const db = require('./database')

const User = db.define('user',{
  firstName:  {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    notEmpty: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

module.exports = User
