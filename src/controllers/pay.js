const Pay = require("../models/Pay");


const addNewPay = async(req, res) => {
    try {
        const newPay = new Pay(req.body)
        await newPay.save();
        res.status(200).json({message: 'The pay was registered correctly', newPay})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getPays = async(req,res) => {
    try {
        const paysList = await Pay.find({isDeleted: false});
        res.status(200).json({message: 'Pays obtained correctly', paysList})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getPaysNotAssigned = async(req,res) => {
    try {
        const {id} = req.params;
        const paysList = await Pay.find({customer: id, isDeleted: false, assigned: false});
        if (paysList.length) {
            res.status(200).json({message: 'Pays obtained', paysList})
        }
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}


const updatePay = async(req, res) => {
    try {
        const {id} = req.params;
        const payload = req.body
        const updatedAssignedPay = await Pay.findByIdAndUpdate(id, payload, {new:true})
        res.status(200).json({message: 'updated pay assigned', updatedAssignedPay})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

module.exports= {
    addNewPay,
    getPays,
    getPaysNotAssigned,
    updatePay,
}

