const express = require("express");
const { newSale, getSales, getSalesNotPaid, updatePay, upDatePrice } = require("../controllers/sale");
const router = express.Router();

router.post('/newSale', newSale)
router.get('/getSales', getSales)
router.get('/getSalesNotPaid', getSalesNotPaid)
router.put('/updatePay/:id', updatePay)
router.patch('/updatePrice', upDatePrice)


module.exports= router;