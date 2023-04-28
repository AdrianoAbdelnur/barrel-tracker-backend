const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const addUser = async(req, res) =>{
    try {
        const salt = await bcryptjs.genSalt(10);
        const encryptedpass = await bcryptjs.hash(req.body.password, salt)
        const payload = {
            ...req.body,
            password: encryptedpass
        };
        const newUser = new User(payload)
        await newUser.save();
        res.status(200).json({message: 'User created correctly'})        
    } catch (error) {
        res.status(error.code || 500).json({message: error.message})
    }
}

const loginUser= async(req, res) => {
    try {
        const {email, password} = req.body;
        const userFound= await User.findOne({email})
        if (!userFound) return res.status(400).json({message: "wrong password or email"})
        const loginSucced = await bcryptjs.compare(password, userFound.password)
        if (!loginSucced) return res.status(400).json({message: "wrong password or email"})
        const payload = {
            user : {
                id : userFound._id, 
            },
        };
        jwt.sign(payload, process.env.SECRETWORD, {expiresIn: "1h"}, (error, token)=>{
            if(error) {
                throw error;
            }
            res.status(200).json({message: "successful login", token})
        })
            
    } catch (error) {
        res.status(error.code || 500).json({message: error.message})
    }
}

const getUserData = async(req, res) => {
    try {
        const token = req.header('Authorization');
        if (!token) return res.status(401).json({message: "token not found"});
        const payload = jwt.verify(token, process.env.SECRETWORD)
        const userFound = await User.findById(payload?.user?.id).select("-password -__v")
        res.json(userFound)
    } catch (error) {
        res.status(error.code || 500).json({message: error.message})
    }
}

module.exports = {
    addUser,
    loginUser,
    getUserData,
}