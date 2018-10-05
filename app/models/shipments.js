const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShipmentSchema = new Schema({
    status: String,
    po: String,
    dest: String,
    pallets: Number,
    dateIn : String,
    dateShip: String,
    dateDue: String,
    product: String,
    notes: String
});
/*
// the schema is useless so far
// we need to create a model using it
const Recipe = mongoose.model('Recipe', RecipeSchema);

// make this available to our Recipes in our Node applications
module.exports = Recipe;
// module.exports = 'Hello world';
*/
module.exports =  mongoose.model('Shipment', ShipmentSchema);