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

router.get('/dep-ship', function(req, res, next) {
    Shipments.find({}, function(err, shipments) {
        res.render('dep-ship', {
            shipments: shipments,
            pathToRoot: '/',
            pageTitle: 'Shipments',
            pageID: 'schedule-ship'
        });
    });;
});

router.post('/dep-ship', function(req, res, next) {
    const shipments = new Shipments({
        status: 'Open',
        po: req.body.shipPoInput,
        dest: req.body.shipDestInput,
        pallets: req.body.shipPalletsInput,
        dateIn : req.body.shipDateInInput,
        dateShip: req.body.shipDateInput,
        dateDue: req.body.shipDateDueInputg,
        product: req.body.shipProductInput,
        notes: req.body.shipNotesInput
    });
    console.log('ID is ' + shipmentss._id);
    events.save().then(() => console.log('New Shipment Created.')).catch(err => console.log(err));

    console.log(shipments._id);
    const shipmentsId = shipments._id;
    
    Shipments.find({}, function(err, shipments) {
        res.redirect(200, '/dep-mix', {
            shipments: shipments,
            pathToRoot: '/',
            pageTitle: 'Shipments',
            pageID: 'schedule-ship'
        });
    });;
});

module.exports = router;