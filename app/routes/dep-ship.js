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

let getToday = function(){
    let date = new Date();
    console.log(date);
    let m1 = date.getMonth() + 1;
    if (m1 == 10 || m1 == 11 || m1 == 12) {
        m= m1;
    } else {
        m = '0' + m1;
    }
    let d1 = date.getDate();
    if (d1 == 1 || d1 == 2 || d1 == 3 || d1 == 4 || d1 == 5 || d1 == 6 || d1 == 7 || d1 == 8 || d1 == 9){
        d = '0' + d1;
    } else {
        d = d1;
    }
    let y = date.getFullYear();
    let today = y + "-" + m + "-" + d;
    console.log(today);
    return today;
}

router.get('/dep-ship', function(req, res, next) {
    let today = getToday();
    Shipments.find({}, function(err, shipments) {
        res.render('dep-ship', {
            shipments: shipments,
            pathToRoot: '/',
            pageTitle: 'Shipments',
            pageID: 'schedule-ship',
            today: today
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
        dateShip: req.body.shipDateShipInput,
        dateDue: req.body.shipDateDueInput,
        product: req.body.shipProductInput,
        notes: req.body.shipNotesInput
    });
    console.log('ID is ' + shipments._id);
    shipments.save().then(() => console.log('New Shipment Created.')).catch(err => console.log(err));

    console.log(shipments._id);
    const shipmentsId = shipments._id;
    
    Shipments.find({}, function(err, shipments) {
        res.redirect(200, '/dep-ship', {
            shipments: shipments,
            pathToRoot: '/',
            pageTitle: 'Shipments',
            pageID: 'schedule-ship'
        });
    });;
});

router.delete('dep-ship/delete/:id?', function(req,res, next) {
    let id = req.params.id;
    console.log('Deleting record: ' + id);
    let collection = db.get().collection('shipments');
  
    collection.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
    });
  
    Shipments.find({}, function(err, shipments) {
        res.render('dep-ship', {
            shipments: shipments,
            pathToRoot: '/',
            pageTitle: 'Shipments',
            pageID: 'schedule-ship',
            today: today
        });
    });;
});

/*
router.delete('/dep-ship/delete/:id', function (req, res) {
    let id = req.params.id;
    console.log('Deleting record: ' + id);
    let collection = db.get().collection('shipments');
  
    collection.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
    });
  
    Shipments.find({}, function(err, shipments) {
        res.render('dep-ship', {
            shipments: shipments,
            pathToRoot: '/',
            pageTitle: 'Shipments',
            pageID: 'schedule-ship',
            today: today
        });
    });;
  });
  */

module.exports = router;