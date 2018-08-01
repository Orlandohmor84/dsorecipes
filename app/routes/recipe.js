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
                        category: doc.category,
                        name: doc.name,
                        flavor: doc.flavor,
                        updated: doc.updated,
                        approver: doc.approver,
                        yield: doc.yield,
                        ing1name: doc.ing1name,
                        ing1quant: doc.ing1quant,
                        ing1unit: doc.ing1unit,
                        ing1notes: doc.ing1notes,
                        ing2name: doc.ing2name,
                        ing2quant: doc.ing2quant,
                        ing2unit: doc.ing2unit,
                        ing2notes: doc.ing3notes,
                        ing3name: doc.ing3name,
                        ing3quant: doc.ing3quant,
                        ing3unit: doc.ing3unit,
                        ing3notes: doc.ing3notes,
                        ing4name: doc.ing4name,
                        ing4quant: doc.ing4quant,
                        ing4unit: doc.ing4unit,
                        ing4notes: doc.ing4notes,
                        ing5name: doc.ing5name,
                        ing5quant: doc.ing5quant,
                        ing5unit: doc.ing5unit,
                        ing5notes: doc.ing5notes,
                        ing6name: doc.ing6name,
                        ing6quant: doc.ing6quant,
                        ing6unit: doc.ing6unit,
                        ing6notes: doc.ing6notes,
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