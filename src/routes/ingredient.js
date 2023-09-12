const express = require("express");
const { addNewIngredient, getIngredients, updatePrices, updatePricesByFile, updateStock } = require("../controllers/ingredient");
const router = express.Router();

router.post('/newIngredient', addNewIngredient)
router.get('/getIngredients', getIngredients)
router.patch('/updatePrices', updatePrices)
router.patch('/updateStock', updateStock)
router.patch('/updatePricesByFile', updatePricesByFile)

module.exports= router;