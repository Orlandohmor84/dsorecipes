const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    nameWhole : String,
    imageURL : String,
    updated : String,
    approver : String,
    yield : String,
    ing01: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing02: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing03: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing04: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing05: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing06: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing07: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing08: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing09: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing10: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing11: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing12: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing13: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing14: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing15: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing16: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    },
    ing17: {
        name : String, 
        quant : Number,
        unit : String,
        notes : String
    } 
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