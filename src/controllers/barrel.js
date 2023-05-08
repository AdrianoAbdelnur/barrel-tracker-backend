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
        const barrelsFound = await Barrel.find()
        res.status(200).json({message: "barrels found", barrelsFound})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

module.exports= {
    addBarrel,
    getBarrels,
}