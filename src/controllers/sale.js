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

const getSalesNotPaid = async(req, res) => {
    try {
        const salesNotPaid= await Sale.find({paidComplete: false})
        res.status(200).json({message: "Sales not paid", salesNotPaid})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

const updatePay = async(req, res) => {
    try {
        const {id} = req.params;
        const SaleUpdated = await Sale.findByIdAndUpdate(id, {paid: req.body.paid , paidComplete: req.body.paidComplete} , {new: true})
        res.status(200).json({message: "Sales pays updated", SaleUpdated})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}


module.exports= {
    newSale,
    getSales,
    getSalesNotPaid,
    updatePay,
}