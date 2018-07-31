const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Recipe = require('../models');

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
                        status: doc.status,
                        name: doc.name,
                        ing1name: doc.ing1name,
                        ing1quant: doc.ing1quant,
                        ing1unit: doc.ing1unit,
                        ing2name: doc.ing2name,
                        ing2quant: doc.ing2quant,
                        ing2unit: doc.ing2unit,
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