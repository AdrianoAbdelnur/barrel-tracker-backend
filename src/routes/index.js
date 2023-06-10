const express = require("express");
const router = express.Router();


router.use('/user', require('./user'))
router.use('/client', require('./client'))
router.use('/barrel', require('./barrel'))
router.use('/styles', require('./stylesBeer'))
router.use('/sale', require('./sale'))
router.use('/pay', require('./pay'))
router.use('/cost', require('./cost'))
router.use('/supplier', require('./supplier'))




module.exports = router; 