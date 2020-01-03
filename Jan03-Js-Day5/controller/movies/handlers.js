const { getMovies, getMovie, getFilteredMovies } = require('./queries')

const handleGetMovieList = function (req, res) {
    res.send(getMovies())
}
const handleGetCertainMovie = function (req, res) {
    res.send(getMovie(req.params.id))
}
const handleGetFilteredMovies = function (req, res) {
    res.send(getFilteredMovies(req.params.ids))
}

module.exports = {
    handleGetMovieList,
    handleGetCertainMovie,
    handleGetFilteredMovies
}

