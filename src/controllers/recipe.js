const Recipe = require("../models/Recipe");


const addNewRecipe = async(req, res) => {
    try {
        const recipeFound = await Recipe.findOneAndUpdate({name: req.body.name, isDeleted: false}, req.body,{new:true})
        if (recipeFound) {
            return res.status(200).json({message: 'The Recipe was updated correctly', recipeFound})
        }else {
            const newRecipe = new Recipe(req.body)
            await newRecipe.save();
            res.status(200).json({message: 'The recipe was registered correctly', newRecipe})
        }    
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getRecipes = async(req,res) => {
    try {
        const recipesList = await Recipe.find({isDeleted: false}).populate("malts.item").populate("hops.item").populate("yeasts.item").populate("others.item").populate("cleanings.item");
        res.status(200).json({message: 'Recipes obtained correctly', recipesList})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getRecipe = async(req,res) => {
    try {
        const {name} = req.params 
        const [recipeFound] = await Recipe.find({isDeleted: false, name}).populate("malts.item").populate("hops.item").populate("yeasts.item").populate("others.item").populate("cleanings.item");
        res.status(200).json({message: 'Recipe obtained correctly', recipeFound})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

module.exports={
    addNewRecipe,
    getRecipes,
    getRecipe
}