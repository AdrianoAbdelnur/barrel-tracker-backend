const {model, Schema, default: mongoose} = require('mongoose');

const ProductCostSchema = new Schema({
    item: {
        type: String
        },
    cost: {
        type: Number
    },
    isDeleted: {
        type: Boolean,
        default:false
    },
    type:{
        type:"String"
    }
},{
    versionKey: false
}
)

const ProductCost = model("ProductCost", ProductCostSchema);

module.exports= ProductCost