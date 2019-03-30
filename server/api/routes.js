const router = require('express').Router()
const {Route} = require('../db/models')

//get all routes, full route /api/routes
router.get('/', async (req, res, next) => {
  try {
    const routes = await Route.findAll()
    res.send(routes)
  } catch (error) {
    next(error)
  }
})
