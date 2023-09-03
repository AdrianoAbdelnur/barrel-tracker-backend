const express = require('express');
const { addNewOrder, getOrders } = require('../controllers/order');
const router = express.Router();


router.post('/addNewOrder', addNewOrder)
router.get('/getOrders', getOrders)



module.exports= router;