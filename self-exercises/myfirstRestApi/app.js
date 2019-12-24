const people=require('./data');
const express = require("express");
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(3222, () => {
    console.log("Server running on port 3000");
    console.log(people);
   });

app.get('/people',function(req, res){
    console.log('/tasks was requested'); 
    res.send(people)
})

app.get('/people/:id',function(req, res){
    const requestedId=req.url.split('/')[2];
    console.log(`a certain person with id: ${requestedId} was requested`);
    res.send(people.filter(person=>person.id==requestedId))
})

app.post('/people',function(req, res){
    console.log(req.body);
    people.push(req.body);
    res.send(people);

})
