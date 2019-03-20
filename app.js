const {db} = require('./server/db/models')
const app = require('./server')
const {green, yellow} = require('chalk')
const port = process.env.PORT || 3000

db.sync()
.then(()=>{
    console.log(yellow('db synced'))
    app.listen(port, function () {
      console.log(green(`Server is on port: ${port}`));
    })
  }
)
