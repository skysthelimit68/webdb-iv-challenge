const router = require('express').Router();
const Recipes = require('./recipes-model.js');

router.get("/", (req, res) => {
    Recipes.getRecipes()
    .then( recipes => {
        res.status(200).json(recipes)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})

router.post("/", (req, res) => {
    const newRecipe = {name: req.body.name, dish_id: req.body.dish_id, instruction: req.body.instruction}
    console.log(newRecipe)
    Recipes.addRecipe(newRecipe)
    .then( id => {
        res.status(200).json(id)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})





module.exports = router;