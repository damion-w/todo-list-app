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
    },

    create: (req, res, next) => {
        const newToDo = new ToDo({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            status: req.body.status,
            user_id: req.body.user_id 
        })

        newToDo.save()
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
    },

    delete: (req, res) => {
        ToDo.getById(req.params.id)
            .then((todo) => {
                return todo.delete()
            })
            .then(() => {
                res.json(
                    {
                        message: 'ok',
                        data: {
                            message: 'Todo deleted successfully'
                        }
                    }
                )
            })
    },

    update: (req, res, next) => {
        ToDo.getById(req.params.id)
            .then((todo) => {
                return todo.update(req.body)
            })
            .then((updatedToDo) => {
                res.json(
                    {
                        message: 'ok',
                        data: {
                            updatedToDo
                        } 
                    }
                )
            })
    }


}

module.exports = todoController