const Cost = require("../models/Cost");


const addNewCost = async(req, res) => {
    try {
        const newCost = new Cost(req.body)
        await newCost.save();
        res.status(200).json({message: 'Cost registered successfully', newCost})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getCosts = async(req, res) => {
    try {
        const costsFound = await Cost.find({isDeleted: false})
        res.status(200).json({message: "Costs found", costsFound})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

module.exports= {
    addNewCost,
    getCosts
}
