const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

router.get('/manager', function(req, res, next) {
    Events.find({}, function(err, events) {
        res.render('manager', {
            pathToRoot: '/',
            pageTitle: 'Manager',
            pageID: 'manager',
        });
    });
});

module.exports = router;