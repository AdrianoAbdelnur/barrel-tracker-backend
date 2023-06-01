const Sale = require("../models/Sale");


const newSale = async(req, res) => {
    try {
        const newSale = new Sale(req.body)
        await newSale.save();
        res.status(200).json({message: 'Succesfull Sale', newSale})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getSales = async(req, res) => {
    try {
        const salesFound = await Sale.find().populate("customer").populate("style")
        res.status(200).json({message: "Sales obtained", salesFound})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

module.exports= {
    newSale,
    getSales,
}