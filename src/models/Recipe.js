const {model, Schema, default: mongoose} = require("mongoose")

const RecipeSchema = new Schema ({
    name: {
        type: String
        },
    malts: [{
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ingredient"
            },
            quantity: {
                type: Number
            }
    }],
    hops: [{
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ingredient"
            },
            quantity: {
                type: Number
            }

    }],
    yeasts: [{
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ingredient"
            },
            quantity: {
                type: Number
            }
    }],
    others: [{
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ingredient"
            },
            quantity: {
                type: Number
            }
    }],
    cleanings: [{
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ingredient"
            },
            quantity: {
                type: Number
            }
    }],
    isDeleted: {
        type: Boolean,
        default:false
    },
},{
    versionKey: false
}
)

const Recipe = model("Recipe", RecipeSchema);

module.exports = Recipe;
