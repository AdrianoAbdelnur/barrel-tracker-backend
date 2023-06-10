const express = require('express');
const { addNewSupplier, getSuppliers } = require('../controllers/supplier');
const router = express.Router();

router.post('/addSupplier', addNewSupplier)
router.get('/getSuppliers', getSuppliers)

module.exports=router;