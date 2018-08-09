const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    status: String,
    date: Date,
    time: String,
    durationEstimate: Number,
    durationActual: Number,
    assignedTo: String,
    assignedFrom: String,
    nameWhole : String
});
/*
// the schema is useless so far
// we need to create a model using it
const Recipe = mongoose.model('Recipe', RecipeSchema);

// make this available to our Recipes in our Node applications
module.exports = Recipe;
// module.exports = 'Hello world';
*/
module.exports =  mongoose.model('Event', EventSchema);