const todoController = require('../controllers/todo-controller')
const todoRouter = require('express').Router();

todoRouter.get('/', todoController.index)

module.exports = todoRouter;