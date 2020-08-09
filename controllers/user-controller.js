const User = require('../models/user')

const userController = {
    show: (req, res, next) => {
        User.getById(req.params.id)
            .then((user) => {
                res.locals.user = user
                next()
            })
            .catch((err) => next(err))
    }
}

module.exports = userController