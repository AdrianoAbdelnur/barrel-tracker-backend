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
        const clientsList = await Client.find();
        res.status(200).json({message: 'Clients obtained correctly', clientsList})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

module.exports= {
    addClient,
    getClients
}