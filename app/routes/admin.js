const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Formulas = require('../models/formulas');
const Event = require('../models/events');

//Set up default mongoose connection
//let uri = 'mongodb://1:2@ds237989.mlab.com:37989/heroku_pv49n3mv';
let uri = 'mongodb://orlando:Lavi4800@ds159641.mlab.com:59641/heroku_j60d59b1';
mongoose.connect(uri);

//Get the default connection
let data = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
data.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.get('/admin', function(req, res, next) {
    console.log(Recipes);
    Recipes.find({}, function(err, recipes) {
        res.render('admin', {
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
                pathToRoot: '/',
                pageTitle: 'Admin',
                pageID: 'admin',
        });
    });
});

module.exports = router;