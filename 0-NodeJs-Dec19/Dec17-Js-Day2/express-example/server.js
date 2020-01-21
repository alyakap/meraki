const express = require('express');
const path = require('path');
const port = 1234;
const app = express() // creating instance of express 

app.listen(port) // start listening on specific port

//app.get(route,callback)

app.get('/home',function(req,res){
    console.log('/home was requested'); //server log
    res.send('<h1>YOU ARE HOME!</h1>'); // what was sent to browser
})

app.get('/about',function(req,res){
    console.log('/about was requested'); //server log
    res.send('<h1>YOU ARE ON THE ABOUT PAGE!</h1>'); // what was sent to browser
})

const movies = [
    {
        id:"123",
        title:"Titanic",
        description:"super long description about Titanic movie"
    },
    {
        id:"789",
        title:"Star wars",
        description:"super long description about Star wars movie"
    },
    {
        id:"987",
        title:"EX-Machina",
        description:"super long description about ex-machina movie"
    },
    {
        id:"654",
        title:"Home Alone",
        description:"super long description about home alone movie"
    }
]



//THIS HAS BEEN BUILD TO RESPOND TO /movies request
//we do not include the description field so we remove it from the data
app.get('/movies',function(req,res){
    console.log('/movies was requested'); //server log
    const moviesWithoutDescription = movies.map(movie=>({
        id: movie.id,
        title: movie.title
    }))
    // in ES6 you can destructure the movie object and merge the key value pairs    
    // const moviesWithoutDescription = movies.map(({id,title})=>({
    //     id,
    //     title
    // }))
    res.send(moviesWithoutDescription); // what was sent to browser
})


// The previous request was to load all my movies
// we also need to be able to show all the data of 1 specifi movie
app.get('/movies/:id',function(req,res){
    const requestedId = req.url.split('/')[2] //req.url = /movies/987456123
    console.log('a certain movie with id: '+requestedId+' was requested'); //server log
    //res.send('getting data of specific movie with id: '+requestedId); // what was sent to browser
    res.send(movies.filter(movie=>movie.id===requestedId))
})

//THIS HAS BEEN BUILD TO RESPOND TO send the client.html to the browser when requested (http://localhost:1234/client.html)
app.get('/client.html',function(req,res){
    console.log('/client.html was requested'); //server log
    res.sendFile(path.join(__dirname + '/client.html')); // we need to join the global __dirname with the file that we want to send 
    // so it gets concatenated correctly according to OS
})



