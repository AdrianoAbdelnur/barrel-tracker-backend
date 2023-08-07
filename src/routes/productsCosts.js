const express = require('express');
const { addNewProductsCost, getCosts, updateCosts } = require('../controllers/productsCosts');
const router = express.Router();


router.post('/addNewCost', addNewProductsCost)
router.get('/getCosts', getCosts)
router.patch('/updateCost', updateCosts)



module.exports= router;