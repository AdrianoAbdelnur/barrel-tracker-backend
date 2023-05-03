const express = require('express');
const router = express.Router();
const { addClient, getClients } = require('../controllers/client');
const { addClietValidations } = require('../middleware/clients');


router.post('/addClient', addClietValidations, addClient)
router.get('/getClients', getClients)

module.exports= router;