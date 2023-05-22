const express = require("express");
const router = express.Router();
const { addNewStyle, deleteStyle } = require("../controllers/stylesBeer");
const { addStyleValidations } = require("../middleware/stylesBeer");

router.post("/addNewStyle", addStyleValidations , addNewStyle);
router.post("/deleteStyle", deleteStyle);

module.exports = router