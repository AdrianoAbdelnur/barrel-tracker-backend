const express = require("express");
const router = express.Router();


router.use('/user', require('./user'))
router.use('/client', require('./client'))
router.use('/barrel', require('./barrel'))
router.use('/styles', require('./stylesBeer'))



module.exports = router; 