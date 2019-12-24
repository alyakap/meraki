const persons=require('./data');
const express = require("express");
const app = express();


app.listen(3222, () => {
    console.log("Server running on port 3000");
    console.log(persons);
   });