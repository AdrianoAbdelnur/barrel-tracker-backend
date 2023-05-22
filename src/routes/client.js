const express = require('express');
const router = express.Router();
const { addClient, getClients, getACustomer } = require('../controllers/client');
const { addClietValidations } = require('../middleware/clients');


router.post('/addClient', addClietValidations, addClient)
router.get('/getClients', getClients)
router.get('/getACustomer', getACustomer)


module.exports= router;