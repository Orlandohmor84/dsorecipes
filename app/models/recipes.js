const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    category : String,
    name : String,
    flavor : String,
    imageURL : String,
    updated : String,
    approver : String,
    yield : String,
    ing01name : String, 
    ing01quant : Number,
    ing01unit : String,
    ing01notes : String,
    ing02name: String, 
    ing02quant: Number,
    ing02unit : String,
    ing02notes : String,
    ing03name: String, 
    ing03quant: Number,
    ing03unit : String,
    ing03notes : String,
    ing04name: String, 
    ing04quant: Number,
    ing04unit : String,
    ing04notes : String,
    ing05name: String, 
    ing05quant: Number,
    ing05unit : String,
    ing05notes : String,
    ing06name: String, 
    ing06quant: Number,
    ing06unit : String,
    ing06notes : String,
    ing07name : String, 
    ing07quant : Number,
    ing07unit : String,
    ing07notes : String,
    ing08name : String, 
    ing08quant : Number,
    ing08unit : String,
    ing08notes : String,
    ing09name : String, 
    ing09quant : Number,
    ing09unit : String,
    ing09notes : String,
    ing10name : String, 
    ing10quant : Number,
    ing10unit : String,
    ing10notes : String,
    ing11name : String, 
    ing11quant : Number,
    ing11unit : String,
    ing11notes : String
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