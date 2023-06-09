const {model, Schema, default: mongoose} = require('mongoose');

const BarrelSchema = new Schema({
    id: {
        type: String
    },
    statusBarrel: {
        type: String,
        default: "empty in factory"
    },
    statusDate: {
        type: Date,
        default: Date.now(),
    },
    style: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StyleBeer"
    },
    capacity: {
        type: Number
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

const Barrel = model("Barrel", BarrelSchema);

module.exports= Barrel