const {model, Schema, default: mongoose} = require('mongoose');

const ProductionSchema = new Schema ({
    style: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StyleBeer"
    },
    date: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default:false
    },
    },{
    versionKey: false
})

const Production = model("Production", ProductionSchema);

module.exports = Production;