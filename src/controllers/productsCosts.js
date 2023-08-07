const ProductCost = require("../models/ProductionsCosts");



const addNewProductsCost = async(req, res) => {
    try {
        const newProductionCost = new ProductCost(req.body)
        await newProductionCost.save();
        res.status(200).json({message: 'Cost registered successfully', newProductionCost})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getCosts =  async (req, res) => {
    try {
        const costsList = await ProductCost.find();
        res.status(200).json({message: 'Costs obtained correctly', costsList})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const updateCosts = async (req, res) => {
    try {
        const {_id, cost} = req.body
        const newCost = await ProductCost.findByIdAndUpdate(_id, {cost}, {new: true})
        res.status(200).json({message:"Cost updated", newCost})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}



module.exports = {
    addNewProductsCost,
    getCosts,
    updateCosts
}