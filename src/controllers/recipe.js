const Recipe = require("../models/Recipe");


const addNewRecipe = async(req, res) => {
    try {
        const newRecipe = new Recipe(req.body)
        await newRecipe.save();
        res.status(200).json({message: 'The recipe was registered correctly', newRecipe})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getRecipes = async(req,res) => {
    try {
        const recipesList = await Recipe.find({isDeleted: false}).populate("malts").populate("hops").populate("yeasts").populate("others").populate("cleaning");
        res.status(200).json({message: 'Recipes obtained correctly', recipesList})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

module.exports={
    addNewRecipe,
    getRecipes
}