const {model, Schema, default: mongoose} = require("mongoose")

const RecipeSchema = new Schema ({
    name: {
        type: String
        },
    malts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ingredient"
            }
    ],
    hops: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ingredient"
            }
    ],
    yeasts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ingredient"
            }
    ],
    others: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ingredient"
            }
    ],
    cleaning: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ingredient"
            }
    ],
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
