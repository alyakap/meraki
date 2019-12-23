const express=require('express');
const port=4567;

const app=express(); //instance of express

app.listen(port);

//testing on browser... got "cannot get" message

app.get('/',function(req,res){
    console.log(req)
    console.log("homepage loaded")
    res.send('<h1>Tasks App</h1>')
})