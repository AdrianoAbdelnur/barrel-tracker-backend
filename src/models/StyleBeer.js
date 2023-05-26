const {model, Schema} = require('mongoose')

const StyleBeerSchema = new Schema ({
    name: {
        type : String
    },
    price: {
        type : Number
    },
    isDelete: {
        type: Boolean,
        default: false,
    }
})

const StyleBeer = model("StyleBeer", StyleBeerSchema);

module.exports = StyleBeer;