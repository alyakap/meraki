const userRouter = require('express').Router()
const users = require('../../models/users')

userRouter.get('/', function (req, res) {
    res.send(users)
})

module.exports = userRouter