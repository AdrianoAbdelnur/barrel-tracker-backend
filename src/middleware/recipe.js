const Recipe = require("../models/Recipe")

const verifyRecipe = async(req, res, next ) => {
    try {
        const {name, malts, hops, yeasts, cleanings } = req.body
        if(!name) return res.status(400).json({message: "Name field is required"})
        if(malts.length === 0) return res.status(400).json({message: "The recipe must have at least one Malt"})
        if(hops.length === 0) return res.status(400).json({message: "The recipe must have at least one Hop"})
        if(yeasts.length === 0) return res.status(400).json({message: "The recipe must have at least one Yeast"})
        if(cleanings.length === 0) return res.status(400).json({message: "The recipe must have at least one Cleaning"})
        const recipeFound = await Recipe.findOne({name})
        if(recipeFound) return res.status(400).json({message: "There is already a recipe with that name"})
        next()
    } catch (error) {
        return res.status(error.code || 500).json({message : error.message})
    }
}

module.exports= {
    verifyRecipe,
}