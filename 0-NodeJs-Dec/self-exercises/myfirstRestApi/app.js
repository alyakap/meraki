const people=require('./data');
const express = require("express");
const port=3222
const app = express();

const bodyParser = require('body-parser') //in order to post an new object you need to get it as json so we use body-parser
app.use(bodyParser.json()) //started to use body-parser
app.use(bodyParser.urlencoded({ extended: true })) //??


app.listen(3222, () => {
    console.log("Server running on port 3222");
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


//the person to be posted needed to be JSON
app.post('/people',function(req, res){
      const newPerson=req.body;
      console.log('The person user wanted to add:', newPerson);
      people.push(newPerson);
      res.send(people)
    })
