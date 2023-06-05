const {model, Schema, default: mongoose } = require("mongoose")

const SaleSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now()
    },
    style: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "StyleBeer"
        },
    volume: {
        type: Number
    },
    price: {
        type: Number
    },
    paid: {
        type: Number,
        default:0
    },
    paidComplete:{
        type: Boolean,
        default: false
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client"
    },
    saleStatus: {
        type: String
    }
},{
    versionKey: false
}
)

const Sale = model("Sale", SaleSchema);

module.exports = Sale;
