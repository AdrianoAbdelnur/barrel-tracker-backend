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

const updateStock = async (req, res) => {
    try {
        const {_id, stock} = req.body
        const newIngredient = await Ingredient.findByIdAndUpdate(_id, {stock}, {new: true})
        res.status(200).json({message:"Stock updated", newIngredient})
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
        res.status(error.code || 500).json({message : error.message})
    }
}

const updateStockByRecipe = async(req, res) => {
    try {
        const {malts, cleanings, hops, yeasts} = req.body;
        for (const malt of malts) {
            await Ingredient.findByIdAndUpdate(malt.item._id, {$inc: {stock: -(malt.quantity)}}, {new:true});
        }
        for (const hop of hops) {
            await Ingredient.findByIdAndUpdate(hop.item._id, {$inc: {stock: -(hop.quantity)}}, {new:true});
        }
        for (const cleaning of cleanings) {
            await Ingredient.findByIdAndUpdate(cleaning.item._id, {$inc: {stock: -(cleaning.quantity)}}, {new:true});
        }
        for (const yeast of yeasts) {
            await Ingredient.findByIdAndUpdate(yeast.item._id, {$inc: {stock: -(yeast.quantity)}}, {new:true});
        }
        res.status(200).json({message: "Stock updated succesfully"})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}


module.exports= {
    addNewIngredient,
    getIngredients,
    updatePrices,
    updatePricesByFile,
    updateStock,
    updateStockByRecipe
}