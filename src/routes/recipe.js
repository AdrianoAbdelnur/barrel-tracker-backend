const express = require("express");
const { addNewRecipe, getRecipes } = require("../controllers/recipe");
const { verifyRecipe } = require("../middleware/recipe");
const router = express.Router();

router.post('/newRecipe',verifyRecipe, addNewRecipe)
router.get('/getRecipes', getRecipes)

module.exports= router;