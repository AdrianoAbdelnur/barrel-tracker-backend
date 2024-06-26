const { isWithinInterval } = require("date-fns");
const Cost = require("../models/Cost");


const addNewCost = async(req, res) => {
    try {
        const newCost = new Cost(req.body)
        await newCost.save();
        res.status(200).json({message: 'Cost registered successfully', newCost})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getCosts = async(req, res) => {
    try {
        const {startDate, endDate} = req.query
        const costsFound = await Cost.find({isDeleted: false})
        let filteredCosts = [];
        if (!startDate) {
            filteredCosts = costsFound;
        }else for (const cost of costsFound) {
                if ( isWithinInterval(cost.date, {
                    start: new Date(startDate),
                    end: new Date(endDate)
                })) {
                    filteredCosts.push(cost)
                }
            }
        res.status(200).json({message: "Costs found", filteredCosts})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

const getTest = async(req, res) => {
    try {
        res.status(200).send("1")
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

module.exports= {
    addNewCost,
    getCosts,
    getTest
}
