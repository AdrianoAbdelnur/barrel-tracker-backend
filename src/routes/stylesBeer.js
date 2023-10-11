const express = require("express");
const router = express.Router();
const { addNewStyle, getStyles, updatePrices, updateRecipe, getStyle } = require("../controllers/stylesBeer");
const { addStyleValidations } = require("../middleware/stylesBeer");

router.post("/addNewStyle", addStyleValidations , addNewStyle);
router.get("/getStyles", getStyles);
router.get("/getStyle/:_id", getStyle);
router.patch("/updatePrices", updatePrices);
router.patch("/updateRecipe", updateRecipe);

module.exports = router