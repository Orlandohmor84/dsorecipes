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
                        t01ing01name: doc.table01.ing01.name,
                        t01ing01quant: doc.table01.ing01.quant,
                        t01ing01unit: doc.table01.ing01.unit,
                        t01ing01notes: doc.table01.ing01.notes,
                        t01ing02name: doc.table01.ing02.name,
                        t01ing02quant: doc.table01.ing02.quant,
                        t01ing02unit: doc.table01.ing02.unit,
                        t01ing02notes: doc.table01.ing03.notes,
                        t01ing03name: doc.table01.ing03.name,
                        t01ing03quant: doc.table01.ing03.quant,
                        t01ing03unit: doc.table01.ing03.unit,
                        t01ing03notes: doc.table01.ing03.notes,
                        t01ing04name: doc.table01.ing04.name,
                        t01ing04quant: doc.table01.ing04.quant,
                        t01ing04unit: doc.table01.ing04.unit,
                        t01ing04notes: doc.table01.ing04.notes,
                        t01ing05name: doc.table01.ing05.name,
                        t01ing05quant: doc.table01.ing05.quant,
                        t01ing05unit: doc.table01.ing05.unit,
                        t01ing05notes: doc.table01.ing05.notes,
                        t01ing06name: doc.table01.ing06.name,
                        t01ing06quant: doc.table01.ing06.quant,
                        t01ing06unit: doc.table01.ing06.unit,
                        t01ing06notes: doc.table01.ing06.notes,
                        t01ing07name: doc.table01.ing07.name,
                        t01ing07quant: doc.table01.ing07.quant,
                        t01ing07unit: doc.table01.ing07.unit,
                        t01ing07notes: doc.table01.ing07.notes,
                        t01ing08name: doc.table01.ing08.name,
                        t01ing08quant: doc.table01.ing08.quant,
                        t01ing08unit: doc.table01.ing08.unit,
                        t01ing08notes: doc.table01.ing08.notes,
                        t01ing09name: doc.table01.ing09.name,
                        t01ing09quant: doc.table01.ing09.quant,
                        t01ing09unit: doc.table01.ing09.unit,
                        t01ing09notes: doc.table01.ing09.notes,
                        t01ing10name: doc.table01.ing10.name,
                        t01ing10quant: doc.table01.ing10.quant,
                        t01ing10unit: doc.table01.ing10.unit,
                        t01ing10notes: doc.table01.ing10.notes,
                        t01ing11name: doc.table01.ing11.name,
                        t01ing11quant: doc.table01.ing11.quant,
                        t01ing11unit: doc.table01.ing11.unit,
                        t01ing11notes: doc.table01.ing11.notes,
                        t01ing12name: doc.table01.ing12.name,
                        t01ing12quant: doc.table01.ing12.quant,
                        t01ing12unit: doc.table01.ing12.unit,
                        t01ing12notes: doc.table01.ing12.notes,
                        t01ing13name: doc.table01.ing13.name,
                        t01ing13quant: doc.table01.ing13.quant,
                        t01ing13unit: doc.table01.ing13.unit,
                        t01ing13notes: doc.table01.ing13.notes,
                        t01ing14name: doc.table01.ing14.name,
                        t01ing14quant: doc.table01.ing14.quant,
                        t01ing14unit: doc.table01.ing14.unit,
                        t01ing14notes: doc.table01.ing14.notes,
                        t01ing15name: doc.table01.ing15.name,
                        t01ing15quant: doc.table01.ing15.quant,
                        t01ing15unit: doc.table01.ing15.unit,
                        t01ing15notes: doc.table01.ing15.notes,
                        t01ing16name: doc.table01.ing16.name,
                        t01ing16quant: doc.table01.ing16.quant,
                        t01ing16unit: doc.table01.ing16.unit,
                        t01ing16notes: doc.table01.ing16.notes,
                        t01ing17name: doc.table01.ing17.name,
                        t01ing17quant: doc.table01.ing17.quant,
                        t01ing17unit: doc.table01.ing17.unit,
                        t01ing17notes: doc.table01.ing17.notes,
                        t02ing01name: doc.table02.ing01.name,
                        t02ing01quant: doc.table02.ing01.quant,
                        t02ing01unit: doc.table02.ing01.unit,
                        t02ing01notes: doc.table02.ing01.notes,
                        t02ing02name: doc.table02.ing02.name,
                        t02ing02quant: doc.table02.ing02.quant,
                        t02ing02unit: doc.table02.ing02.unit,
                        t02ing02notes: doc.table02.ing03.notes,
                        t02ing03name: doc.table02.ing03.name,
                        t02ing03quant: doc.table02.ing03.quant,
                        t02ing03unit: doc.table02.ing03.unit,
                        t02ing03notes: doc.table02.ing03.notes,
                        t02ing04name: doc.table02.ing04.name,
                        t02ing04quant: doc.table02.ing04.quant,
                        t02ing04unit: doc.table02.ing04.unit,
                        t02ing04notes: doc.table02.ing04.notes,
                        t02ing05name: doc.table02.ing05.name,
                        t02ing05quant: doc.table02.ing05.quant,
                        t02ing05unit: doc.table02.ing05.unit,
                        t02ing05notes: doc.table02.ing05.notes,
                        t02ing06name: doc.table02.ing06.name,
                        t02ing06quant: doc.table02.ing06.quant,
                        t02ing06unit: doc.table02.ing06.unit,
                        t02ing06notes: doc.table02.ing06.notes,
                        t02ing07name: doc.table02.ing07.name,
                        t02ing07quant: doc.table02.ing07.quant,
                        t02ing07unit: doc.table02.ing07.unit,
                        t02ing07notes: doc.table02.ing07.notes,
                        t02ing08name: doc.table02.ing08.name,
                        t02ing08quant: doc.table02.ing08.quant,
                        t02ing08unit: doc.table02.ing08.unit,
                        t02ing08notes: doc.table02.ing08.notes,
                        t02ing09name: doc.table02.ing09.name,
                        t02ing09quant: doc.table02.ing09.quant,
                        t02ing09unit: doc.table02.ing09.unit,
                        t02ing09notes: doc.table02.ing09.notes,
                        t02ing10name: doc.table02.ing10.name,
                        t02ing10quant: doc.table02.ing10.quant,
                        t02ing10unit: doc.table02.ing10.unit,
                        t02ing10notes: doc.table02.ing10.notes,
                        t02ing11name: doc.table02.ing11.name,
                        t02ing11quant: doc.table02.ing11.quant,
                        t02ing11unit: doc.table02.ing11.unit,
                        t02ing11notes: doc.table02.ing11.notes,
                        t02ing12name: doc.table02.ing12.name,
                        t02ing12quant: doc.table02.ing12.quant,
                        t02ing12unit: doc.table02.ing12.unit,
                        t02ing12notes: doc.table02.ing12.notes,
                        t02ing13name: doc.table02.ing13.name,
                        t02ing13quant: doc.table02.ing13.quant,
                        t02ing13unit: doc.table02.ing13.unit,
                        t02ing13notes: doc.table02.ing13.notes,
                        t02ing14name: doc.table02.ing14.name,
                        t02ing14quant: doc.table02.ing14.quant,
                        t02ing14unit: doc.table02.ing14.unit,
                        t02ing14notes: doc.table02.ing14.notes,
                        t02ing15name: doc.table02.ing15.name,
                        t02ing15quant: doc.table02.ing15.quant,
                        t02ing15unit: doc.table02.ing15.unit,
                        t02ing15notes: doc.table02.ing15.notes,
                        t02ing16name: doc.table02.ing16.name,
                        t02ing16quant: doc.table02.ing16.quant,
                        t02ing16unit: doc.table02.ing16.unit,
                        t02ing16notes: doc.table02.ing16.notes,
                        t02ing17name: doc.table02.ing17.name,
                        t02ing17quant: doc.table02.ing17.quant,
                        t02ing17unit: doc.table02.ing17.unit,
                        t02ing17notes: doc.table02.ing17.notes,
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