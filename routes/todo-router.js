const todoController = require('../controllers/todo-controller')
const todoRouter = require('express').Router();

todoRouter.get('/', todoController.index)
todoRouter.get('/:id', todoController.show)

module.exports = todoRouter;