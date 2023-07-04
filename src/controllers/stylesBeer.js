const StyleBeer = require("../models/StyleBeer")


const addNewStyle = async(req,res)=>{
    try {
        const newStyle = new StyleBeer(req.body);
        await newStyle.save();
        res.status(200).json({message: 'Style created successfully', newStyle})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getStyles = async (req, res) => {
    try {
        const stylesFound = await StyleBeer.find({ isDelete: false })
        res.status(200).json({message: "Styles got correctly", stylesFound})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const updatePrices = async (req, res) => {
    try {
        const {_id, price} = req.body
        const newStyle = await StyleBeer.findByIdAndUpdate(_id, {price}, {new: true})
        res.status(200).json({message:"Price updated", newStyle})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const updateRecipe = async (req, res) => {
    try {
        const {name, hasRecipe} = req.body
        const newStyle = await StyleBeer.findOneAndUpdate({name : name}, {hasRecipe}, {new: true})
        res.status(200).json({message:"Has Recipe updated", newStyle})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}



module.exports= {
    addNewStyle,
    getStyles,
    updatePrices,
    updateRecipe
}
