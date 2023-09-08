const express = require('express');
const { addNewOrder, getPendingOrders } = require('../controllers/order');
const router = express.Router();


router.post('/addNewOrder', addNewOrder)
router.get('/getOrders', getPendingOrders)



module.exports= router;