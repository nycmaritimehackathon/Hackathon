const router = require('express').Router()
const {Vessel} = require('../db/models')

//get all vessels, full route /api/vessels
router.get('/', async (req, res, next) => {
  try {
    const vessels = await Vessel.findAll()
    res.send(vessels)
  } catch (error) {
    next(error)
  }
})
