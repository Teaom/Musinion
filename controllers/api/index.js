// Routing
const router = require('express').Router()
const userRoutes = require('./userRoutes')
const reviewRoutes = require('./reviewRoutes')
const noteRoutes = require('./noteRoutes')

router.use('/user', userRoutes)
router.use('/review', reviewRoutes)
router.use('/note', noteRoutes)

module.exports = router