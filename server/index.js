const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const port = process.env.PORT || 3000

// logging middleware
app.use(morgan('dev'))

//body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api')) //routes

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

//error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

app.listen(port, function () {
  console.log(`Sever is on port: ${port}`);
})
