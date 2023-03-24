// This is where user personal reviews will be rendered to /profile (user can only see their own reviews here)
const router = require('express').Router()
const { Review, User } = require('../models')
const withAuth = require('../utils/auth')

// Get all routes created by the current user
router.get('/', withAuth, async (req, res) => {

    try {
        const reviewData = await Review.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ],
            where: {
                user_id: req.session.user_id
            }
        })
        const Reviews = reviewData.map((review) => review.get({ plain: true }))
        res.render('profile', { Reviews, logged_in: req.session.logged_in })
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router