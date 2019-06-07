const router = require('express').Router();
const Dishes = require('./dishes-model.js');

router.get("/", (req, res) => {
    Dishes.getDishes()
    .then( dishes => {
        res.status(200).json(dishes)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})

//get dish by id, returning dish and all its recipes in an array
router.get("/:id", validateDishId, (req, res) => {
    res.status(200).json(req.body.dish)
})

router.post("/", (req, res) => {
    const newDish = {name: req.body.name}
    Dishes.addDish(newDish) 
    .then( id => {
        res.status(200).json(id)
    })    .catch( error => {
        res.status(500).json(error)
    })
})


//middleware
function validateDishId(req, res, next) {
    Dishes.getDish(req.params.id) 
    .then( dish => {
        if(dish.length < 1) {
            res.status(404).json({message: "dish not found"})
        } else {
            req.body.dish = dish
            next();
        }
    })
    .catch( error => {
        res.status(500).json(error)
    })
}

module.exports = router;