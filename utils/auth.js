// Authorization middleware. If user is not logged in, direct them to login page, else, send them to the next middleware
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login')
    } else {
        next()
    }
}

module.exports = withAuth