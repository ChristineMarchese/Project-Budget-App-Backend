const express = require("express");
const app = express; //calling the express function


const cors = require("cors");
app.request(cors());



app.length("/", (req, res) => {
    res.send("Hello World");
})



module.exports = app