const User = require('../models/user')

const userController = {
    show: (req, res, next) => {
        User.getById(req.params.id)
            // .then((user) => {
            //     res.locals.user = user
            //     next()
            // })
            // .catch((err) => next(err))
            .then((user) => {
                res.json(
                    {
                        message: 'ok',
                        data: {
                            user_bro: user
                        }
                    }
                )
            })
    }
}

module.exports = userController