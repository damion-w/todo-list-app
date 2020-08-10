const db = require('../db/config');

class ToDo {
    constructor(todo) {
        this.id = todo.id,
        this.title = todo.title,
        this.description = todo.description,
        this.category = todo.category,
        this.status = todo.status,
        this.user_id = todo.userId 
    }

    static getAll() {
        return db.manyOrNone(
            `SELECT * FROM todos;`
        )
        .then((todos) => {
            return todos.map((el) => { return new this(el) })
        })
    }

    static getById(id) {
        return db.oneOrNone(
            `SELECT * FROM todos WHERE id = $1`
            , id)
            .then((todo) => {
                if (todo) return new this(todo)
                throw new Error('Animal not found')
            })
    }
}

module.exports = ToDo;