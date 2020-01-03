const taskRouter = require('express').Router()
const tasks = require('../../models/tasks')

taskRouter.get('/', (req, res) => res.send(tasks))

module.exports = taskRouter