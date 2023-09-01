const express = require('express');
const { addBarrel, getBarrels, changeStatus, getABarrel } = require('../controllers/barrel');
const { verifyQrCode } = require('../middleware/barrel');
const router = express.Router();

router.post('/addBarrel',verifyQrCode, addBarrel)
router.get('/getBarrels', getBarrels)
router.put('/status/:id', changeStatus)
router.get('/getABarrel/:id',verifyQrCode,getABarrel)

module.exports= router;