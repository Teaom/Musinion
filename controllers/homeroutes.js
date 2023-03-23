// where home screen will be rendered
const router = require('express').Router()
const { User, Review } = require('../models')

// Ben

// localhost:3001/

// Render homepage with reviews
router.get('/', async (req, res) => {
    try {
        // TODO: Add rendering for reviews
        res.render('homepage', { logged_in: req.session.logged_in })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Render login screen
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
        return
    }

    res.render('login')
})

// Render signup screen
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
        return
    }

    res.render('signup')
})

// TODO: Render one review by id (also render comments on it)

module.exports = router