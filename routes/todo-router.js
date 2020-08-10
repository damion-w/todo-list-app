const todoController = require('../controllers/todo-controller')
const todoRouter = require('express').Router();

todoRouter.get('/', todoController.index)
todoRouter.post('/', todoController.create)
todoRouter.get('/:id([0-9]+)', todoController.show)
todoRouter.put('/:id', todoController.update)
todoRouter.delete('/:id([0-9]+)', todoController.delete)

module.exports = todoRouter;