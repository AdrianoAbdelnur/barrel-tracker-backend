const express = require('express');
const { addNewOrder, getPendingOrders, cancelOrder } = require('../controllers/order');
const router = express.Router();


router.post('/addNewOrder', addNewOrder)
router.get('/getOrders', getPendingOrders)
router.patch('/cancelOrder/:id', cancelOrder)



module.exports= router;