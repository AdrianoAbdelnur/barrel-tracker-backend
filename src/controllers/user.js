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

module.exports = {
    addUser,
}