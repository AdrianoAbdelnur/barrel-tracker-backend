const express = require('express');
const { addBarrel, getBarrels } = require('../controllers/barrel');
const router = express.Router();

router.post('/addBarrel', addBarrel)
router.get('/getBarrels', getBarrels)

module.exports= router;