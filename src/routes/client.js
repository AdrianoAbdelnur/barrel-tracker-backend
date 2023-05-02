const express = require('express');
const router = express.Router();
const { addClient } = require('../controllers/client');
const { addClietValidations } = require('../middleware/clients');


router.post('/addClient', addClietValidations, addClient)

module.exports= router;