const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventProdMainSchema = new Schema({
    status: String,
    date: String,
    timeStart: String,
    timeEnd: String,
    nameWhole : String,
    amount: String,
    line: String,
    manager: String, 
    notes: String,
    shift: String
});
/*
// the schema is useless so far
// we need to create a model using it
const Recipe = mongoose.model('Recipe', RecipeSchema);

// make this available to our Recipes in our Node applications
module.exports = Recipe;
// module.exports = 'Hello world';
*/
module.exports =  mongoose.model('EventProdMain', EventProdMainSchema);