const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: String,
    yield: String,
    ing1name: String, 
    ing1quant: Number,
    ing1unit : String,
    ing2name: String, 
    ing2quant: Number,
    ing2unit : String
});
/*
// the schema is useless so far
// we need to create a model using it
const Recipe = mongoose.model('Recipe', RecipeSchema);

// make this available to our Recipes in our Node applications
module.exports = Recipe;
// module.exports = 'Hello world';
*/
module.exports =  mongoose.model('Recipe', RecipeSchema);