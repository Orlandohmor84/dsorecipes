const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Recipe = require('../models/recipes');
const Event = require('../models/events');

router.get('/recipe/:recipeId', (req, res, next) => {
    
    if(req.params.recipeId == undefined || req.params.recipeId == null || req.params.recipeId == 'undefined') {
        console.log('Having difficulties finding this recipe.');
        res.redirect('/schedule');
    } else {
        console.log(req.params);
        const id = req.params.recipeId;
        console.log(id);
        Recipe.findById(id)
            .exec()
            .then(doc => {
                console.log('Running then method.');
                console.log('Database record', doc);
                if (doc) {
                    res.render('recipe', {
                        recipeId: doc._id,
                        category: doc.category,
                        name: doc.name,
                        flavor: doc.flavor,
                        imageURL: doc.imageURL,
                        updated: doc.updated,
                        approver: doc.approver,
                        yield: doc.yield,
                        ing01name: doc.ing01name,
                        ing01quant: doc.ing01quant,
                        ing01unit: doc.ing01unit,
                        ing01notes: doc.ing01notes,
                        ing02name: doc.ing02name,
                        ing02quant: doc.ing02quant,
                        ing02unit: doc.ing02unit,
                        ing02notes: doc.ing03notes,
                        ing03name: doc.ing03name,
                        ing03quant: doc.ing03quant,
                        ing03unit: doc.ing03unit,
                        ing03notes: doc.ing03notes,
                        ing04name: doc.ing04name,
                        ing04quant: doc.ing04quant,
                        ing04unit: doc.ing04unit,
                        ing04notes: doc.ing04notes,
                        ing05name: doc.ing05name,
                        ing05quant: doc.ing05quant,
                        ing05unit: doc.ing05unit,
                        ing05notes: doc.ing05notes,
                        ing06name: doc.ing06name,
                        ing06quant: doc.ing06quant,
                        ing06unit: doc.ing06unit,
                        ing06notes: doc.ing06notes,
                        ing07name: doc.ing07name,
                        ing07quant: doc.ing07quant,
                        ing07unit: doc.ing07unit,
                        ing07notes: doc.ing07notes,
                        ing08name: doc.ing08name,
                        ing08quant: doc.ing08quant,
                        ing08unit: doc.ing08unit,
                        ing08notes: doc.ing08notes,
                        ing09name: doc.ing09name,
                        ing09quant: doc.ing09quant,
                        ing09unit: doc.ing09unit,
                        ing09notes: doc.ing09notes,
                        ing10name: doc.ing10name,
                        ing10quant: doc.ing10quant,
                        ing10unit: doc.ing10unit,
                        ing10notes: doc.ing10notes,
                        ing11name: doc.ing11name,
                        ing11quant: doc.ing11quant,
                        ing11unit: doc.ing11unit,
                        ing11notes: doc.ing11notes,
                        pathToRoot: '../',
                        pageTitle: 'Recipe',
                        pageID: 'recipe'
                    });
                        
                    // res.status(200).json(doc);
                    console.log(doc.name);
                } else {
                    res.status(400).json({ message: 'No record for id' });
                }
                    
            })  
        .catch(err => {
            console.log('Event not found.');
            console.log(err);
            res.redirect('/404');
        });
    } 
});

module.exports = router;