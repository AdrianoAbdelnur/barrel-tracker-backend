const express = require("express");
const { addNewIngredient, getIngredients } = require("../controllers/ingredient");
const router = express.Router();

router.post('/newIngredient', addNewIngredient)
router.get('/getIngredients', getIngredients)

module.exports= router;