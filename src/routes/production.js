const express = require('express');
const { addProduction, getProductions } = require('../controllers/production');
const router = express.Router();

router.post('/newProduction', addProduction)
router.get('/getProductions', getProductions)

module.exports= router;