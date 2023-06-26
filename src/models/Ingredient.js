const {model, Schema} = require("mongoose")

const IngredientSchema = new Schema ({
    name: {
        type: String
        },
    ingredientType: {
        type: String
    },
    price: {
        type: Number
    },
    isDeleted: {
        type: Boolean,
        default:false
    },
},{
    versionKey: false
}
)

const Ingredient = model("Ingredient", IngredientSchema);

module.exports = Ingredient;
