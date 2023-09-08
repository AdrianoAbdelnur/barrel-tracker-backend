const Order = require("../models/Order");

const addNewOrder = async(req, res) => {
    try {
        const newOrder = new Order(req.body)
        await newOrder.save();
        res.status(200).json({message: 'New order added Succesfully', newOrder})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getPendingOrders =  async (req, res) => {
    try {
        const ordersList = await Order.find({status: "pending"});
        res.status(200).json({message: 'Orders obtained correctly', ordersList})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}



module.exports= {
    addNewOrder,
    getPendingOrders
}