const userRouter = require('express').Router()

const { handleGetUsersList } = require('./handlers')

userRouter.get('/', handleGetUsersList)

module.exports = userRouter