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

const updatePrices = async (req, res) => {
    try {
        const {_id, price} = req.body
        const newIngredient = await Ingredient.findByIdAndUpdate(_id, {price}, {new: true})
        res.status(200).json({message:"Price updated", newIngredient})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const updatePricesByFile = async (req, res) => {
    try {
        const {name, ingredientType, price, units} = req.body;
        const foundIngredient =await Ingredient.findOneAndUpdate({name}, {ingredientType, price, units}, {new:true})
        if (foundIngredient) {
            return res.status(200).json({message:"Price updated", foundIngredient})
        } else {
            const newIngredient = new Ingredient({name, ingredientType, price, units})
            await newIngredient.save();
            return res.status(200).json({message: 'The ingredient was added correctly', newIngredient})
        }

    } catch (error) {
        
    }
}


module.exports= {
    addNewIngredient,
    getIngredients,
    updatePrices,
    updatePricesByFile
}