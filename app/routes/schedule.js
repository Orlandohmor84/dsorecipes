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
/*
let getTime =  function() {
    let str = event.time;
    console.log(str);
    let res = str.substring(0, 2);
    console.log(res);
    let hourMilitary = parseInt(res, 10);
    console.log(hourMilitary);
    if (hourMilitary => 13) {
        hour = hourMilitary - 12;
        console.log(hour);
    } else {
        hour = res;
        console.log(hour);
    }
    console.log(hour);
    return hour;
}
getTime();
console.log(hour);
document.getElementById('time').innerHTML = hour;
*/

router.get('/schedule', function(req, res, next) {
    
    let today = getToday();
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
        timeStart: req.body.mixTimeStartInput,
        timeEnd: req.body.mixTimeEndInput,
        notes: req.body.notes
    });
    console.log('ID is ' + events._id);
    events.save().then(() => console.log('New Event Created.')).catch(err => console.log(err));

    console.log(events._id);
    const eventsId = events._id;
    
    let today = getToday();
    Events.find({}, function(err, events) {
        res.redirect(200, '/schedule', {
            events: events,
            pathToRoot: '/',
            pageTitle: 'Schedule',
            pageID: 'schedule',
            today: today
        });
    });;
});

module.exports = router;