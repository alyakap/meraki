const { getUsers } = require('./queries')

const handleGetUsersList = function (req, res) {
    res.send(getUsers())
}

module.exports = {
    handleGetUsersList,
}

