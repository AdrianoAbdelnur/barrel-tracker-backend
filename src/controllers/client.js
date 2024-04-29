const Client = require('../models/Client')

const addClient = async(req, res) => {
    try {
        const newClient = new Client(req.body)
        await newClient.save();
        res.status(200).json({message: 'Client created successfully', newClient})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getClients =  async (req, res) => {
    try {
        const clientsList = await Client.find({isDeleted:false});
        res.status(200).json({message: 'Clients obtained correctly', clientsList})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getACustomer = async(req,res) => {
    try {
        const {barName} = req.body
        const customerFound = await Client.findOne({barName})
        if (customerFound) {
            return res.status(200).json({message: 'Customer obtained correctly', customerFound})
        }
        throw Error("Customer not found");
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const updateCustomer = async(req, res) => {
    try {
        const {id} = req.params;
        const payload = req.body
        const updatedCustomer = await Client.findByIdAndUpdate(id, payload, {new:true})
        res.status(200).json({message: 'updated customer', updatedCustomer})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}
const deleteCustomer = async(req, res) => {
    try {
        const {id} = req.params;
        const updatedCustomer = await Client.findByIdAndUpdate(id, {isDeleted : true}, {new:true})
        res.status(200).json({message: 'Customer deleted succesfully', updatedCustomer})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}



module.exports= {
    addClient,
    getClients,
    getACustomer,
    updateCustomer,
    deleteCustomer,
}