const { getTasks } = require('./queries')

const handleGetTasksList = function (req, res) {
    res.send(getTasks())
}

module.exports = {
    handleGetTasksList,
}

