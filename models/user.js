const db = require('../db/config')

class User {
    constructor(user) {
        this.id = user.id || null,
        this.title = user.title || null,
        this.description = user.description  || null,
        this.category = user.categorystatus || null, 
        this.status = user.status  || 'To do',
        this.user_id = user.user_id
    }

    static getById(id) {
        return db.oneOrNone(
            `SELECT * FROM users WHERE id = $1;`
            , id
        )
        .then((user) => {
            if (user) return new this(user)
            throw new Error('no user found')
        })
    }
}

module.exports = User