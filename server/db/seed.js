const db = require('./models/database')
const {User} = require('./models')
const {green, yellow} = require('chalk')

const seed = async() =>  {
  await db.sync({force: true})
  console.log (yellow('database synced!'))

  const users = await Promise.all([
    User.create({
      firstName: 'Joe',
      lastName: 'Hu',
      email: 'joe@sonder.com'
    }),
    User.create({
      firstName: "Stephen",
      lastName: "Lord",
      email: "stephen@sonder.com"
    })
  ])

  console.log(green('seeded!'))
}

seed()

module.exports = seed
