const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mainRouter = require('./controller')
/*** START SERVER */
const port = 4567;
const app = express();
app.listen(port, () => {
    console.log(`Server is listening on port:${port}...`);
})

/*** SETUP GLOBAL MIDDLEWARES */
// add logs on the server's terminal
app.use(morgan('tiny'));
// add cors support
app.use(cors());
// support parsing of application/json type post data
app.use(express.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));

app.get('/test', function (req, res) {
    console.log('test was called...')
    res.send('<h1>Test was called</h1>')
})


mainRouter(app)
// some use
// require('./controller')(app)