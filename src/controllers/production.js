const Production = require("../models/Production");
const { isWithinInterval } = require("date-fns");


const addProduction = async(req, res) => {
    try {
        console.log(req.body)
        const newProduction = new Production(req.body)
        await newProduction.save();
        res.status(200).json({message: 'Production added successfully', newProduction})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getProductions = async(req, res) => {
    try {
        const {startDate, endDate} = req.query
        const ProductionFound = await Production.find({isDeleted: false}).populate("style")
        let filteredProduction = [];
        if (!startDate) {
            filteredProduction = ProductionFound;
        }else for (const production of ProductionFound) {
                if ( isWithinInterval(production.date, {
                    start: new Date(startDate),
                    end: new Date(endDate)
                })) {
                    filteredProduction.push(production)
                }
            }
        res.status(200).json({message: "Productions found", filteredProduction})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

module.exports= {
    addProduction,
    getProductions
}