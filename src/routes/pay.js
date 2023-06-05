const express = require("express");
const { addNewPay, getPays, getPaysNotAssigned, updatePay} = require("../controllers/pay");
const router = express.Router();

router.post('/newPay', addNewPay)
router.get('/getPays', getPays)
router.get('/getPaysNotAssigned/:id', getPaysNotAssigned)
router.put('/updatePay/:id', updatePay)


module.exports= router;