const express=require('express');
const tasks=require('./data');
const port=4567;

const app=express(); //instance of express

app.listen(port);

//testing on browser... got "cannot get" message

app.get('/',function(req,res){
    console.log("homepage loaded");
    res.send('<h1>Tasks App</h1>');
})

app.get('/tasks',function(req, res){
    console.log('/tasks was requested'); 
    const getTasks=tasks.map(task=>`<li>${task}</li>`)
    res.send("<ul>Tasks</ul>"+getTasks)
})