const Ingredient = require("../models/Ingredient");

const addNewIngredient = async(req, res) => {
    try {
        const newIngredient = new Ingredient(req.body)
        await newIngredient.save();
        res.status(200).json({message: 'The ingredient was added correctly', newIngredient})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getIngredients =  async (req, res) => {
    try {
        const ingredientsList = await Ingredient.find();
        res.status(200).json({message: 'Ingredients obtained correctly', ingredientsList})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}


module.exports= {
    addNewIngredient,
    getIngredients
}