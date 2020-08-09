const express = require('express')
const app = express()

const logger = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const userRouter = require('./routes/user-router')

app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.json(
        {
            message: 'ok',
            data: 'Show index view here'
    })
})

