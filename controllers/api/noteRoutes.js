const router = require('express').Router()
const { Note } = require('../../models')
const withAuth = require('../../utils/auth')

// Post route to create note to db
router.post('/', withAuth, async (req, res) => {
    try {
        const noteData = await Note.create({
            contents: req.body.contents,
            user_id: req.session.user_id,
            review_id: req.body.review_id
        })
        res.status(200).json(noteData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router