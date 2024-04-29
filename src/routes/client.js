const express = require('express');
const router = express.Router();
const { addClient, getClients, getACustomer, updateCustomer, deleteCustomer } = require('../controllers/client');
const { addClietValidations } = require('../middleware/clients');


router.post('/addClient', addClietValidations, addClient)
router.get('/getClients', getClients)
router.get('/getACustomer', getACustomer)
router.put('/updateCustomer/:id', updateCustomer )
router.put('/deleteCustomer/:id', deleteCustomer )


module.exports= router;