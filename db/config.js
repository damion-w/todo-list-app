require('dotenv').config()
const DB_NAME = process.env.DB_NAME || "todo_dev"

const options = {
    query: (e) => { console.log(e.query) }
}

const pgp = require('pg-promise')(options)

// How does process.env.NODE_ENV get set to 'development'?
function setDatabase() {
    if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
        return pgp({
            database: DB_NAME,
            port: 5432,
            host: 'localhost'
        })
    }
    else {
        return pgp(process.env.DATABASE_URL)
    }
}

module.exports = setDatabase()