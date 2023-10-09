const express = require('express');
const { addNewCost, getCosts } = require('../controllers/cost');
const router = express.Router();


router.post('/addNewCost', addNewCost)
router.get('/getCosts', getCosts)
router.get('/getTest', getTest)



module.exports= router;