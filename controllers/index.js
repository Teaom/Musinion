// Routing
const router = require('express').Router()
const apiRoutes = require('./api')
const homeRoutes = require('./homeroutes')
const profileRoutes = require('./profile')

router.use('/api', apiRoutes)
router.use('/profile', profileRoutes) 
router.use('/', homeRoutes)

module.exports = router