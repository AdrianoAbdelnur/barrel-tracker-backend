const express = require("express");
const router = express.Router();
const {addUser} = require("../controllers/user")

router.get("/", (req, res)=>{
    res.send("hola mundo");
})

router.post("/register", addUser)

module.exports = router; 