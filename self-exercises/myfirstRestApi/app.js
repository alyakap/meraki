var express = require("express");
var app = express();
var persons=require('./data')

app.listen(3222, () => {
    console.log("Server running on port 3000");
   });