const express = require("express");
const app = express(); //calling the express function

const cors = require("cors");//importing cors connects the backend with frontend

app.use(cors());

const budgetController = require("./controllers/budgetController");

app.use("/budget", budgetController);



app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("*", (req, res) => {
    res.status(404).send("Not Found");
});



module.exports = app