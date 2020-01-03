const movieRouter = require('./movies/routes');
const taskRouter = require('./tasks/routes');
const userRouter = require('./users/routes');

const mainRouter = function (app) {
    app.use('/movies', movieRouter) //we connect the router middleware that was exported in /movies/index.js
    app.use('/tasks', taskRouter)
    app.use('/users', userRouter)
}

module.exports = mainRouter;



