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


const deleteStyle = async(req,res) => {
    try {
        req.send("hola")
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}


module.exports= {
    addNewStyle,
    deleteStyle
}
