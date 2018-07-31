const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

router.get('/schedule', function(req, res, next) {
    Events.find({}, function(err, events) {
        res.render('schedule', {
            pathToRoot: '/',
            pageTitle: 'Schedule',
            pageID: 'Schedule',
        });
    });
});

module.exports = router;