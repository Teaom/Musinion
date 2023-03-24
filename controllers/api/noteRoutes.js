const router = require('express').Router()
const { Note } = require('../../models')
const withAuth = require('../../utils/auth')

// Post route to create note to db
router.post('/', withAuth, async (req, res) => {
    try {
        const commentData = await Note.create({
            ...req.body,
            user_id: req.session.user_id,
            review_id: req.body.review_id
        })
        res.status(200).json(commentData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router