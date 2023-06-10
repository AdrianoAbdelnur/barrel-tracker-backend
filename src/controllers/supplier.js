const Supplier = require("../models/Supplier");


const addNewSupplier = async(req,res)=>{
    try {
        const newSupplier = new Supplier(req.body);
        await newSupplier.save();
        res.status(200).json({message: 'Supplier added successfully', newSupplier})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getSuppliers = async(req,res) => {
    try {
        const SuppliersList = await Supplier.find({isDeleted: false});
        res.status(200).json({message: 'Suppliers obtained correctly', SuppliersList})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}


module.exports = {
    addNewSupplier,
    getSuppliers
}