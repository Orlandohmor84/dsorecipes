const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Events = require('../models/events');

//Set up default mongoose connection
//let uri = 'mongodb://1:2@ds237989.mlab.com:37989/heroku_pv49n3mv';
let uri = 'mongodb://orlando:Lavi4800@ds159641.mlab.com:59641/heroku_j60d59b1';
mongoose.connect(uri);

//Get the default connection
let data = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
data.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.put('/event/:eventId', function(req, res, next) {
    
    if(req.params.eventId == undefined || req.params.eventId == null || req.params.eventId == 'undefined') {
        console.log('Having difficulties finding this event.');
        res.redirect('/schedule');
    } else {
        const id = req.params.eventId;
        console.log(id);
        console.log('Request body is ' + req.body);
        console.log(req.body);
    }

       
});

module.exports = router;