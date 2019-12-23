const express=require('express');
const tasks=require('./data');
const port=4567;

const app=express(); //instance of express

app.listen(port);

app.get('/',function(req,res){
    console.log("homepage loaded");
    res.send('<h1>Tasks App</h1>');
})

app.get('/tasks',function(req, res){
    console.log('/tasks was requested'); 
    const getTasks=tasks.map(task=>`<li>${task}</li>`)
    res.send("<ul>Tasks</ul>"+getTasks.join(""))
})

app.get('/tasks/:id',function(req, res){
    const requestedId = req.url.split('/')[2]
    console.log('a certain task with id: '+requestedId+' was requested');
    res.send(tasks.filter(task=>task.id==requestedId))
}) 