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
    },

    show: (req, res, next) => {
        ToDo.getById(req.params.id)
            .then((todo) => {
                res.json(
                    {
                        message: 'ok',
                        data: {
                            todo
                        }
                    }
                )
            })
            .catch(next)
    }
}

module.exports = todoController