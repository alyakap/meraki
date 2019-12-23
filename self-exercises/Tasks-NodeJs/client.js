const path = require('path');
const axios=require('axios');
const tasks=require('./data');



app.get('/client.html',function(req,res){
    console.log('/client.html was requested');
    res.sendFile(path.join(__dirname + '/client.html')); 
})

function loadTasks() {
    axios.get("http://localhost:4567/home").then(handleData);
    }


function handleData(axiosResponse) {
    console.log(axiosResponse.data);
    listTitle .innerHTML = axiosResponse.data
        .map(task => "<li>" + task.title + "</li>")
        .join("");
    }