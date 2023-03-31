// Review post route (maybe add update/delete later if bored)
const router = require('express').Router();
const Review = require('../../models/Review');
const withAuth = require('../../utils/auth');

// creates the review and adds it to db
router.post('/', withAuth, async (req, res) => {
    try {
        const newReview = await Review.create({
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json(newReview)
    } catch (err) {
        res.status(500).json(err)
    }
});


// router.delete('/:id', async(req, res) => {
//     try {
//         const blogData = await Review.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })

//         if (!blogData) {
//             res.status(404).json({ message: 'No review found with this id' })
//             return
//         }

//         res.status(200).json(blogData)
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err)
//     }
// })

module.exports = router;