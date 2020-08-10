const User = require('../models/user')

const userController = {
    show: (req, res, next) => {
        User.getById(req.params.id)
            .then((user) => {
                res.json(
                    {
                        message: 'ok',
                        data: {
                            user: user
                        }
                    }
                )
            })
    }
}

module.exports = userController