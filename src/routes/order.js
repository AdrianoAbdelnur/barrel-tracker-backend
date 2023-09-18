const express = require('express');
const { addNewOrder, getPendingOrders, cancelOrder, statusItemChange } = require('../controllers/order');
const router = express.Router();


router.post('/addNewOrder', addNewOrder)
router.get('/getOrders', getPendingOrders)
router.patch('/cancelOrder/:id', cancelOrder)
router.put('/statusItemChange', statusItemChange)



module.exports= router;