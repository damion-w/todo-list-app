const db = require('../db/config');

class ToDo {
    constructor(todo) {
        this.id = todo.id,
        this.title = todo.title,
        this.description = todo.description,
        this.category = todo.category,
        this.status = todo.status,
        this.user_id = todo.user_id 
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
            `SELECT * FROM todos WHERE id = $1;`
            , id)
            .then((todo) => {
                if (todo) return new this(todo)
                throw new Error('Animal not found')
            })
    }

    save() {
        return db.one(
            `INSERT INTO todos (title, description, category, status, user_id) VALUES ($/title/, $/description/, $/category/, $/status/, $/user_id/) RETURNING *;`
            , this)
            .then((todo) => {
                return Object.assign(this, todo)
            })
    }

    delete() {
        return db.oneOrNone(
            `DELETE FROM todos where id = $1;`
            , this.id)
    }

    update(updatedToDo) {
        Object.assign(this, updatedToDo);

        return db.oneOrNone(
            `UPDATE todos SET title = $/title/, description = $/description/, category = $/category/, status = $/status/, user_id = $/user_id/ WHERE id = $/id/ RETURNING *;`
            , this)
            .then((todo) => {
                return Object.assign(this, todo)
            })
    }
}

module.exports = ToDo;