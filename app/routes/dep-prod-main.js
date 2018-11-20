const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventsProdMain = require('../models/events-prod-main');

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

let getDayNum1 = function(){
    Date.prototype.getDOY = function() {
        var onejan = new Date(this.getFullYear(),0,1);
        return Math.ceil((this - onejan) / 86400000);
    }
    let today = new Date();
    let dayNum1 = today.getDOY();
    console.log('DayNum1 below.');
    console.log(dayNum1);
    return dayNum1;
}
let getDayNum2 = function(){
    Date.prototype.getDOY = function() {
        var onejan = new Date(this.getFullYear(),0,1);
        return Math.ceil((this - onejan) / 86400000);
    }
    let today = new Date();
    let dayNum1 = today.getDOY();
    let dayNum2 = dayNum1 + 1;
    console.log('Daynum2 below.');
    console.log(dayNum2);
    return dayNum2;
}

let getDayNum3 = function(){
    Date.prototype.getDOY = function() {
        var onejan = new Date(this.getFullYear(),0,1);
        return Math.ceil((this - onejan) / 86400000);
    }
    let today = new Date();
    let dayNum1 = today.getDOY();
    let dayNum3 = dayNum1 + 2;
    console.log('Daynum3 below.');
    console.log(dayNum3);
    return dayNum3;
}

router.get('/dep-prod-main', function(req, res, next) {
    let today = getToday();
    let dayNum1 = getDayNum1();
    let dayNum2 = getDayNum2();
    let dayNum3 = getDayNum3();
    let tomorrow = dayNum2;
    console.log('dayNum2 is ' + dayNum2);
    let dayDate2;
    let formatDate2 = function() {
        if (tomorrow == 251) {
            dayDate2 == '09-08-2018';
            return dayDate2;
        } else if (tomorrow == 252) {
            dayDate2 == '09-09-2018';
            return dayDate2;
        } else if (tomorrow == 253) {
            dayDate2 == '09-10-2018';
            return dayDate2;
        }   
    }
    let day2 = formatDate2();
    console.log('day2 below');
    console.log(day2);
    EventsProdMain.find({}, function(err, eventsProdMain) {
        res.render('dep-prod-main', {
            eventsProdMain: eventsProdMain,
            pathToRoot: '/',
            pageTitle: 'Main Production Schedule',
            pageID: 'schedule-prod-main',
            today: today,
            dayNum1: dayNum1,
            dayNum2: dayNum2
        });
    });;
});

router.post('/dep-prod-main', function(req, res, next) {
    const eventsProdMain = new EventsProdMain({
        status: 'New',
        nameWhole: req.body.prodMainProductInput,
        amount: req.body.prodMainAmountInput,
        date: req.body.prodMainDateInput,
        timeStart: req.body.prodMainTimeStartInput,
        timeEnd: req.body.prodMainTimeEndInput,
        shift: req.body.prodMainShiftInput,
        notes: req.body.prodMainNotesInput
    });
    console.log('ID is ' + eventsProdMain._id);
    eventsProdMain.save().then(() => console.log('New Event Created.')).catch(err => console.log(err));

    console.log(eventsProdMain._id);
    const eventsId = eventsProdMain._id;
    
    let today = getToday();
    EventsProdMain.find({}, function(err, events) {
        res.redirect(200, '/dep-prod-main', {
            events: events,
            pathToRoot: '/',
            pageTitle: 'Main Production Schedule',
            pageID: 'schedule-prod-main',
            today: today
        });
    });;
});

module.exports = router;