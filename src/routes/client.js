const express = require('express');
const router = express.Router();
const { addClient } = require('../controllers/client');


router.post('/addClient', addClient)

module.exports= router;