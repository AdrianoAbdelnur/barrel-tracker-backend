const User = require('../models/User')

const addUser = async(req, res) =>{
    try {
        const newUser = new User(req.body)
        await newUser.save();
        res.status(200).json({message: 'User created correctly'})        
    } catch (error) {
        res.status(error.code || 500).json({message: error.message})
    }
}

const authUser= async(req, res) => {
    try {
        const {email, password} = req.body;
        const userFound= await User.findOne({email, password}).select('-password')
        if (!userFound) return res.status(400).json({message: "wrong password or email"})
        res.status(200).json({message: "successful login", data: userFound})
            
    } catch (error) {
        res.status(error.code || 500).json({message: error.message})
    }
}

module.exports = {
    addUser,
    authUser,
}