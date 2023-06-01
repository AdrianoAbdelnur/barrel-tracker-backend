const express = require("express");
const { newSale, getSales } = require("../controllers/sale");
const router = express.Router();

router.post('/newSale', newSale)
router.get('/getSales', getSales)


module.exports= router;