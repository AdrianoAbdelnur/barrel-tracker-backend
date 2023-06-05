const {model, Schema, default: mongoose} = require('mongoose');

const PaySchema = new Schema ({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client"
    },
    pay: {
        type: Number,
        default: 0
    },
    noAssignedPay: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default:false
    },
    
    assigned: {
        type:Boolean,
        default: false
    }


    },{
    versionKey: false
})

const Pay = model("Pay", PaySchema);

module.exports = Pay;