const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Shipments = require('../models/shipments');

//Set up default mongoose connection
//let uri = 'mongodb://1:2@ds237989.mlab.com:37989/heroku_pv49n3mv';
let uri = 'mongodb://orlando:Lavi4800@ds159641.mlab.com:59641/heroku_j60d59b1';
mongoose.connect(uri);

//Get the default connection
let data = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
data.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.post('/dep-ship-schedule-review', function(req, res, next) {
    console.log(req.body);

    res.render('dep-ship-schedule-review', {
        status: 'Open',
        po: req.body.shipPoSelect,
        dest: req.body.shipDestSelect,
        pallets: req.body.shipPalletsSelect,
        dateIn : req.body.shipDateInSelect,
        dateShip: req.body.shipDateSelect,
        dateDue: req.body.shipDateDueSelectg,
        product: req.body.shipProductSelect,
        notes: req.body.shipNotesSelect,
        pathToRoot: '/',
        pageTitle: 'Review Schedule Addition',
        pageID: 'scheduleAddReview'
    });
});

module.exports = router;