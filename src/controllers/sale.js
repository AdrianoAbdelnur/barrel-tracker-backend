const { isWithinInterval } = require("date-fns");
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
        const {startDate, endDate} = req.query
        const salesFound = await Sale.find().populate("customer").populate("style")
        let filteredSales = [];
        if (!startDate) {
            filteredSales = salesFound;
        }else for (const sale of salesFound) {
                if ( isWithinInterval(sale.date, {
                    start: new Date(startDate),
                    end: new Date(endDate)
                })) {
                    filteredSales.push(sale)
                }
            }
        res.status(200).json({message: "Sales obtained", filteredSales})
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

const upDatePrice= async(req,res) => {
    try {
        const {id, price}=req.body
        const priceUpdate = await Sale.findByIdAndUpdate(id, {price}, {new: true} )
        res.status(200).json({message: "Price updated", priceUpdate})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}


module.exports= {
    newSale,
    getSales,
    getSalesNotPaid,
    updatePay,
    upDatePrice
}