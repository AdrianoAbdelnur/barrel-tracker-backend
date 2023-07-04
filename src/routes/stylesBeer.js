const express = require("express");
const router = express.Router();
const { addNewStyle, getStyles, updatePrices, updateRecipe } = require("../controllers/stylesBeer");
const { addStyleValidations } = require("../middleware/stylesBeer");

router.post("/addNewStyle", addStyleValidations , addNewStyle);
router.get("/getStyles", getStyles);
router.patch("/updatePrices", updatePrices);
router.patch("/updateRecipe", updateRecipe);

module.exports = router