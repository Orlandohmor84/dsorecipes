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

let getToday = function(){
    let date = new Date();
    console.log(date);
    let m1 = date.getMonth() + 1;
    if (m1 == 10 || m1 == 11 || m1 == 12) {
        m= m1;
    } else {
        m = '0' + m1;
    }
    let d = date.getDate();
    let y = date.getFullYear();
    let today = y + "-" + m + "-" + d;
    console.log(today);
    return today;
}

router.get('/event/:eventId', function(req, res, next) {
    if(req.params.eventId == undefined || req.params.eventId == null || req.params.eventId == 'undefined') {
        console.log('Having difficulties finding this event.');
        res.redirect('/schedule');
    } else {
        const id = req.params.eventId;
        console.log(id);
        console.log('Request body is ' + req.body);
        console.log(req.body);
        Events.findById(id)
            .exec()
            .then(doc => {
                console.log('Running then method.');
                console.log('Database record', doc);
                if (doc) {
                    res.render('event', {
                        eventId: doc._id,
                        status: doc.status,
                        date: doc.date,
                        time: doc.time,
                        durationEstimate: doc.durationEstimate,
                        durationActual: doc.durationActual,
                        assignedTo: doc.assignedTo,
                        assignedFrom: doc.category,
                        category: doc.category,
                        name: doc.name,
                        flavo: doc.flavor,
                        nameWhole: doc.nameWhole,
                        pathToRoot: '../../',
                        pageTitle: 'Event',
                        pageID: 'event'
                    });
                        
                    console.log('Status updated!');
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

router.put('/event/:eventId/update', function(req, res, next) {
    const id = req.params.eventId;
    
    Events.update({ _id: id }, { $set: { status : req.body.status } })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        })
    
        let today = getToday();
        Events.find({}, function(err, events) {
            res.render('schedule-updated', {
                events: events,
                pathToRoot: '../../',
                pageTitle: 'Schedule',
                pageID: 'schedule',
                today: today
            });
        });;
   
});

router.post('/event/:eventId/update', function(req, res, next) {
    const id = req.params.eventId;
    
    Events.update({ _id: id }, { $set: { status : req.body.status } })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        })
    
        let today = getToday();
        Events.find({}, function(err, events) {
            res.render('schedule-updated', {
                events: events,
                pathToRoot: '../../',
                pageTitle: 'Schedule',
                pageID: 'schedule',
                today: today
            });
        });;
   
});

module.exports = router;