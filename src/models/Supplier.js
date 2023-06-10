const {model, Schema } = require('mongoose')

const SupplierSchema = new Schema ({
    name: {
        type: String
    },
    email: {
        type: String
    },
    whatsapp: {
        type: String
    },
    contactName: {
        type: String
    },
    location: {
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
},{
    versionKey: false
}
)

const Supplier = model("Supplier", SupplierSchema);

module.exports= Supplier;