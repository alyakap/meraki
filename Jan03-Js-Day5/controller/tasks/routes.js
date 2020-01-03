const tasksRouter = require('express').Router()

const { handleGetTasksList } = require('./handlers')

tasksRouter.get('/', handleGetTasksList)

module.exports = tasksRouter