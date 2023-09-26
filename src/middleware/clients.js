const Client = require("../models/Client")


const addClietValidations = async(req,res,next) => {
    try {
        const {barName, barManager, location, coordinates} = req.body
        if(!barName || !barManager || !location || !coordinates) return res.status(400).json({message: "Required fields must be completed"})
        const clientFound = await Client.findOne({barName})
        if(clientFound) return res.status(400).json({message: "The bar's name is alredy in use"})
        next();
    } catch (error) {
        return res.status(error.code || 500).json({message : error.message})
    }
}

module.exports = {
    addClietValidations,
}