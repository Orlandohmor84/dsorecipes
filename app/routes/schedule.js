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

router.get('/schedule', function(req, res, next) {
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
    Events.find({}, function(err, events) {
        res.render('schedule', {
            events: events,
            pathToRoot: '/',
            pageTitle: 'Schedule',
            pageID: 'schedule',
            today: today
        });
    });;
});

router.post('/schedule', function(req, res, next) {
    const events = new Events({
        status: 'Not Started',
        nameWhole: req.body.mixRecipeInput,
        assignedTo: req.body.mixMixerInput,
        date: req.body.mixDateInput,
        time: req.body.mixTimeInput,
        notes: req.body.notes
    });
    console.log('ID is ' + events._id);
    events.save().then(() => console.log('New Event Created.')).catch(err => console.log(err));

    console.log(events._id);
    const eventsId = events._id;
    
    Events.find({}, function(err, events) {
        res.redirect(200, '/schedule', {
            events: events,
            pathToRoot: '/',
            pageTitle: 'Schedule',
            pageID: 'schedule'
        });
    });;
});

module.exports = router;