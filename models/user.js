const db = require('../db/config')

class User {
    constructor(user) {
        this.id = user.id || null,
        this.firstName = user.firstName,
        this.lastName = user.lastName,
        this.username = user.username, 
        this.email = user.email,
        this.password_digest = user.password_digest
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