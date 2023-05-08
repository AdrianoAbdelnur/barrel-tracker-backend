const express = require("express");
const router = express.Router();


router.use('/user', require('./user'))
router.use('/client', require('./client'))
router.use('/barrel', require('./barrel'))



module.exports = router; 