const express = require("express");
const { addNewRecipe, getRecipes, getRecipe } = require("../controllers/recipe");
const { verifyRecipe } = require("../middleware/recipe");
const router = express.Router();

router.post('/newRecipe', addNewRecipe)
router.get('/getRecipes', getRecipes)
router.get('/getRecipe/:name', getRecipe)

module.exports= router;