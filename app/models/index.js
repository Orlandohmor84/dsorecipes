const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    category : String,
    name : String,
    flavor : String,
    updated : String,
    approver : String,
    yield : String,
    ing1name : String, 
    ing1quant : Number,
    ing1unit : String,
    ing1notes : String,
    ing2name: String, 
    ing2quant: Number,
    ing2unit : String,
    ing2notes : String,
    ing3name: String, 
    ing3quant: Number,
    ing3unit : String,
    ing3notes : String,
    ing4name: String, 
    ing4quant: Number,
    ing4unit : String,
    ing4notes : String,
    ing5name: String, 
    ing5quant: Number,
    ing5unit : String,
    ing5notes : String,
    ing6name: String, 
    ing6quant: Number,
    ing6unit : String,
    ing6notes : String
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