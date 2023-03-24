// where home screen will be rendered
const router = require('express').Router()
const { User, Review } = require('../models')
const withAuth = require('../utils/auth')

// Render homepage with reviews
router.get('/', async (req, res) => {
    try {
        const reviewData = await Review.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']

                },
            ],
        });

        const Reviews = reviewData.map((review) => review.get({ plain: true }));

        res.render('homepage', { Reviews, logged_in: req.session.logged_in, username: req.session.username });

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

// Render one review by id
router.get('/Review/:id', async (req, res) => {
    try {
        const reviewData = await Review.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        const singleReview = reviewData.get({ plain: true });

        res.render('singleReview',
            { singleReview });
    } catch (err) {
        res.status(500).json(err)
    }
});

// Get route to render 'create-review' handlebars
router.get('/create-review', withAuth, async (req, res) => {
    try { 
        // const userData = await User.findOne({ where: { username: req.body.username } })
    
        // if (!userData) {
        //     res.status(400).json({ message: 'Please sign in!'})
        //     return
        // }
        
        res.render('create-review', {
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err)
    }  
});

module.exports = router