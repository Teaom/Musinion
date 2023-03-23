// Review post route (maybe add update/delete later if bored)
const router = require('express').Router();
const Review = require('../../models/Review');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newReview = await Review.create(req.body);

        res.status(200).json(newReview)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;