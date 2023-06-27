const express = require("express");
const { addNewRecipe, getRecipes } = require("../controllers/recipe");
const router = express.Router();

router.post('/newRecipe', addNewRecipe)
router.get('/getRecipes', getRecipes)

module.exports= router;