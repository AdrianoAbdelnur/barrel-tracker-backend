const {model, Schema } = require('mongoose')

const ClientSchema = new Schema ({
    barName: {
        type: String
    },
    barManager: {
        type: String
    },
    owner: {
        type: String
    },
    location: {
        type: String
    },
    email: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
    isDeleted: {
        type: Boolean,
        default:false
    },

})

const Client = model("Client", ClientSchema);

module.exports= Client;