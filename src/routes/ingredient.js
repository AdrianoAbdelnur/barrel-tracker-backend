const express = require("express");
const { addNewIngredient, getIngredients, updatePrices } = require("../controllers/ingredient");
const router = express.Router();

router.post('/newIngredient', addNewIngredient)
router.get('/getIngredients', getIngredients)
router.patch('/updatePrices', updatePrices)

module.exports= router;