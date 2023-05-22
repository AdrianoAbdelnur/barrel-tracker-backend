const express = require('express');
const { addBarrel, getBarrels, changeStatus, getABarrel } = require('../controllers/barrel');
const router = express.Router();

router.post('/addBarrel', addBarrel)
router.get('/getBarrels', getBarrels)
router.put('/status/:id', changeStatus)
router.get('/getABarrel/:id', getABarrel)

module.exports= router;