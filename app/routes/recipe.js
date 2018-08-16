const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Recipes = require('../models/recipes');
const Event = require('../models/events');

//Set up default mongoose connection
//let uri = 'mongodb://1:2@ds237989.mlab.com:37989/heroku_pv49n3mv';
let uri = 'mongodb://orlando:Lavi4800@ds159641.mlab.com:59641/heroku_j60d59b1';
mongoose.connect(uri);

//Get the default connection
let data = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
data.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.get('/recipe/:recipeId', (req, res, next) => {
    
    if(req.params.recipeId == undefined || req.params.recipeId == null || req.params.recipeId == 'undefined') {
        console.log('Having difficulties finding this recipe.');
        res.redirect('/schedule');
    } else {
        console.log('Recipe ID found!!!!!!!!!!');
        //console.log(req.params);
        const id = req.params.recipeId;
        //console.log(id);
        Recipes.findById(id)
            .exec()
            .then(doc => {
                console.log('Running then method.');
                //console.log('Database record', doc);
                if (doc) {
                    console.log('Doc found!!!!!!!!!!');
                    res.render('recipe', {
                        recipeId: doc._id,
                        nameWhole: doc.nameWhole,
                        category: doc.category,
                        name: doc.name,
                        flavor: doc.flavor,
                        imageURL: doc.imageURL,
                        updated: doc.updated,
                        approver: doc.approver,
                        yield: doc.yield,
                        ing01name: doc.ing01.name,
                        ing01quant: doc.ing01.quant,
                        ing01unit: doc.ing01.unit,
                        ing01notes: doc.ing01.notes,
                        ing02name: doc.ing02.name,
                        ing02quant: doc.ing02.quant,
                        ing02unit: doc.ing02.unit,
                        ing02notes: doc.ing03.notes,
                        ing03name: doc.ing03.name,
                        ing03quant: doc.ing03.quant,
                        ing03unit: doc.ing03.unit,
                        ing03notes: doc.ing03.notes,
                        ing04name: doc.ing04.name,
                        ing04quant: doc.ing04.quant,
                        ing04unit: doc.ing04.unit,
                        ing04notes: doc.ing04.notes,
                        ing05name: doc.ing05.name,
                        ing05quant: doc.ing05.quant,
                        ing05unit: doc.ing05.unit,
                        ing05notes: doc.ing05.notes,
                        ing06name: doc.ing06.name,
                        ing06quant: doc.ing06.quant,
                        ing06unit: doc.ing06.unit,
                        ing06notes: doc.ing06.notes,
                        ing07name: doc.ing07.name,
                        ing07quant: doc.ing07.quant,
                        ing07unit: doc.ing07.unit,
                        ing07notes: doc.ing07.notes,
                        ing08name: doc.ing08.name,
                        ing08quant: doc.ing08.quant,
                        ing08unit: doc.ing08.unit,
                        ing08notes: doc.ing08.notes,
                        ing09name: doc.ing09.name,
                        ing09quant: doc.ing09.quant,
                        ing09unit: doc.ing09.unit,
                        ing09notes: doc.ing09.notes,
                        ing10name: doc.ing10.name,
                        ing10quant: doc.ing10.quant,
                        ing10unit: doc.ing10.unit,
                        ing10notes: doc.ing10.notes,
                        ing11name: doc.ing11.name,
                        ing11quant: doc.ing11.quant,
                        ing11unit: doc.ing11.unit,
                        ing11notes: doc.ing11.notes,
                        ing12name: doc.ing12.name,
                        ing12quant: doc.ing12.quant,
                        ing12unit: doc.ing12.unit,
                        ing12notes: doc.ing12.notes,
                        ing13name: doc.ing13.name,
                        ing13quant: doc.ing13.quant,
                        ing13unit: doc.ing13.unit,
                        ing13notes: doc.ing13.notes,
                        ing14name: doc.ing14.name,
                        ing14quant: doc.ing14.quant,
                        ing14unit: doc.ing14.unit,
                        ing14notes: doc.ing14.notes,
                        ing15name: doc.ing15.name,
                        ing15quant: doc.ing15.quant,
                        ing15unit: doc.ing15.unit,
                        ing15notes: doc.ing15.notes,
                        ing16name: doc.ing16.name,
                        ing16quant: doc.ing16.quant,
                        ing16unit: doc.ing16.unit,
                        ing16notes: doc.ing16.notes,
                        ing17name: doc.ing17.name,
                        ing17quant: doc.ing17.quant,
                        ing17unit: doc.ing17.unit,
                        ing17notes: doc.ing17.notes,
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
            console.log('Recipe not found.');
            console.log(err);
            res.redirect('/404');
        });
    } 
});

module.exports = router;