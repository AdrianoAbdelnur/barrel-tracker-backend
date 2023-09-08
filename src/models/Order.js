const {model, Schema, default: mongoose} = require('mongoose');

const OrderSchema = new Schema({
    orderList: [
        {
            StyleId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Style"
            },
            styleName: {
                type: String
            },
            volume: {
                type: Number
            },
            quantity: {
                type: Number
            },
        }    
    ],
    status: {
        type: String,
        default: "pending"
    },
    Date: {
        type: Date,
        default: Date.now(),
    },
    customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Client"
        },
    isDeleted: {
        type: Boolean,
        default:false
    }
},{
    versionKey: false
}
)

const Order = model("Order", OrderSchema);

module.exports= Order