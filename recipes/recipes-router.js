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

//add ingredient to recipe one at a time
router.post("/:id/ingredients", (req, res) => {
    const newIngredient = {
        recipe_id: req.params.id, 
        ingredient_id: req.body.ingredient_id, 
        quantity: req.body.quantity, 
        unit_id: req.body.unit_id
    }
    Recipes.addIngredient(newIngredient) 
    .then( id => {
        res.status(201).json(id)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})

router.get("/:id", (req, res) => {
    Recipes.getRecipe(req.params.id)
    .then( recipe => {
        res.status(200).json(recipe)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})


//middleware
/*function validateRecipeId(req, res, next) {
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
}*/




module.exports = router;