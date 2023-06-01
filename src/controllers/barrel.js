const Barrel = require("../models/Barrel");


const addBarrel = async(req, res) => {
    try {
        const newBarrel = new Barrel(req.body)
        await newBarrel.save();
        res.status(200).json({message: 'Barrel added successfully', newBarrel})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getBarrels = async(req, res) => {
    try {
        const barrelsFound = await Barrel.find().populate("customer").populate("style")
        res.status(200).json({message: "barrels found", barrelsFound})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

const getABarrel = async(req, res) => {
    try {
        const {id} = req.params;
        const barrelFound = await Barrel.findOne({id}).populate("customer").populate("style")
        res.status(200).json({message:"barrel found", barrelFound})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

const changeStatus = async(req, res) => {
    try {
        const {id} = req.params;
        if (req.body.statusBarrel === "empty in factory") {
            const upDatedBarrel = await Barrel.findOneAndUpdate({id}, { statusBarrel: req.body.statusBarrel, style: req.body.style, statusDate: Date.now()}, {new: true}).select("-customer -style")
            return res.status(200).json({message: 'Barrel status updated corretly', upDatedBarrel})
        }
        if (req.body.statusBarrel === "full in factory") {
            const upDatedBarrel = await Barrel.findOneAndUpdate({id}, { statusBarrel: req.body.statusBarrel, style: req.body.style, statusDate: Date.now()}, {new: true}).populate("style").select("-customer")
            return res.status(200).json({message: 'Barrel status updated corretly', upDatedBarrel})
        }
        if (req.body.statusBarrel === "delivered to customer") {
            const upDatedBarrel = await Barrel.findOneAndUpdate({id}, { statusBarrel: req.body.statusBarrel, customer: req.body.customer, statusDate: Date.now()}, {new: true}).populate("style").populate("customer")
            return res.status(200).json({message: 'Barrel status updated corretly', upDatedBarrel})
        }
        
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

module.exports= {
    addBarrel,
    getBarrels,
    changeStatus,
    getABarrel,
}
