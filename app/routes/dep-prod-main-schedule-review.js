const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Events = require('../models/events');
const Recipes = require('../models/recipes');

//Set up default mongoose connection
//let uri = 'mongodb://1:2@ds237989.mlab.com:37989/heroku_pv49n3mv';
let uri = 'mongodb://orlando:Lavi4800@ds159641.mlab.com:59641/heroku_j60d59b1';
mongoose.connect(uri);

//Get the default connection
let data = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
data.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.post('/dep-prod-main-schedule-review', function(req, res, next) {
    console.log(req.body);

    res.render('dep-prod-main-schedule-review', {
        nameWhole: req.body.mixRecipeSelect,
        mixer: req.body.mixMixerSelect,
        date: req.body.mixDateSelect,
        time: req.body.mixTimeSelect,
        amount: req.body.mixAmount,
        notes: req.body.notes,
        pathToRoot: '/',
        pageTitle: 'Review Schedule Addition',
        pageID: 'scheduleAddReview'
    });
});

module.exports = router;