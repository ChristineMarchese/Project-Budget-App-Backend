const express = require("express");

const budget = express.Router()// setup the router

const budgetArray = require("../models/budget.js");

budget.get("/", (req, res) => {
     res.send(budgetArray);
});

budget.get("/:id", (req, res) => {
    const id = req.params.id;
    if(budgetArray[id]){
       res.send(budgetArray[id]);
    } else {
      res.status(404).send("message: not found")
    }
});

budget.post("/", express.json(), (req, res) => {
    if(req.body){
      budgetArray.push(req.body);// creating the new item and push into the array
      res.send(budgetArray);
    } else {
       res.status(404).send("message: not found");
    }
});

budget.delete("/:id", (req, res) => {
     const id = req.params.id;
     if(!budgetArray){
        res.status(404).send("message: not found");
     } else {
       budgetArray.splice(id, 1);
       res.send(budgetArray);
     }
});

budget.put("/:id", express.json(), (req, res) => {
    const id = req.params.id;
    if(budgetArray[id]){
        budgetArray[id] = req.body;
        res.send(budgetArray[id]);
    } else {
        res.status(404).send("message: not found")
    }
});

module.exports = budget