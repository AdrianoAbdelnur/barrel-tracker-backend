const express = require("express");
const router = express.Router();
const {addUser, authUser} = require("../controllers/user");
const { createUsersValidations, authUserValidations } = require("../middleware/users");
const validate = require("./../helpers/validate");

router.get("/", (req, res)=>{
    res.send("hola mundo");
})

router.post("/register",createUsersValidations, addUser)
router.post("/login", authUserValidations(), validate, authUser)

module.exports = router; 