const StyleBeer = require("../models/StyleBeer");


const addStyleValidations = async (req, res, next) => {
    try {
        const {name} = req.body;
        if(!name) return res.status(400).json({message: "Required fields must be completed"})
        const styleFound = await StyleBeer.findOne({name})
        if (styleFound) return res.status(400).json({message: "The style already exists"})
        next();
    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }
}


module.exports = {
    addStyleValidations,
}