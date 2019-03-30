const router = require('express').Router()
module.exports = router

router.use('/routes', require('./routes'))
router.use('/vessels', require('./vessels'))
// router.use('/voyages', require('./voyages'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
