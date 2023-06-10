const {model, Schema} = require("mongoose")

const CostSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now()
    },
    item: {
        type: String
        },
    supplier: {
        type: String
    },
    cost: {
        type: Number
    },
    costCenter: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default:false
    },
},{
    versionKey: false
}
)

const Cost = model("Cost", CostSchema);

module.exports = Cost;
