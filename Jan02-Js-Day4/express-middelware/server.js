const express=require('express');
let tasks=require('./data');
const cors = require('cors')
// const path=require('path')
const morgan = require('morgan'); // => famous logger middleware
const body_parser = require('body-parser'); // => req.body rules checker
const port=4567;


const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

//CURRYING
const myFancyLogger = function(color){
    return function(req,res,next){
        //console.log("%c", "background: red;padding: 100000px;");
        console.log(color, req.url);
        console.log(color, req.requestTime);
        next()
    }
}



const app=express();

app.use(cors());
app.use(requestTime)
app.use(morgan('tiny'))
app.use(myFancyLogger("\x1b[33m"))

// app.use(body_parser.json({ limit: '10kb' }));
app.listen(port);

app.get('/tasks',function(req, res){
    var body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      // on end of data, perform necessary action
      // body = Buffer.concat(body).toString();
      //console.log(body)
      console.log(Buffer.concat(body))
      //console.log(JSON.parse(Buffer.concat(body).toString()))
    });
    res.send(tasks)
})







// app.get('/tasks/:id',function(req, res){
//     const task = tasks.find(task => task.id === req.params.id);
//     if (task) {
//         res.send(task);
//      } else {
//         res.send({ message: `item ${req.params.id} doesn't exist`})
//      }
// }) 

// app.post('/tasks',function(req,res){
//     tasks.push(req.body);
//     res.send(tasks)
// })

// app.delete('/tasks/:id',function(req,res){
//     tasks = tasks.filter(task=>task.id !== req.params.id);
//     res.send(tasks)
// })

// app.put('/tasks/:id',function(req,res){
//     tasks = tasks.map(task=>{
//         if(task.id === req.params.id){
//             return req.body
//         }else{
//             return task
//         }
//     })
//     res.send(tasks)
// })