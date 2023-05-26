const express = require("express");
const router = express.Router();
const { addNewStyle, getStyles, updatePrices } = require("../controllers/stylesBeer");
const { addStyleValidations } = require("../middleware/stylesBeer");

router.post("/addNewStyle", addStyleValidations , addNewStyle);
router.get("/getStyles", getStyles);
router.patch("/updatePrices", updatePrices);

module.exports = router