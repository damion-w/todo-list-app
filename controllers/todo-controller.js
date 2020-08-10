const ToDo = require('../models/todo')

const todoController = {
    index: (req, res, next) => {
        ToDo.getAll()
            .then((todos) => {
                res.json(
                    {
                        message: 'ok',
                        data: {
                            todos: { todos }
                        }
                    }
                )
            })
            .catch(next)
    }
}

module.exports = todoController