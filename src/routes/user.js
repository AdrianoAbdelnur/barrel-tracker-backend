const express = require("express");
const { createUsersValidations, authUserValidations } = require("../middleware/users");
const { addUser, loginUser, getUserData } = require("../controllers/user");
const validate = require("../helpers/validate");
const router = express.Router();

router.post("/register",createUsersValidations, addUser)
router.post("/login", authUserValidations(), validate, loginUser)

router.get("/userData", getUserData)

module.exports=router;