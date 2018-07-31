const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

router.get('/admin', function(req, res, next) {
    Events.find({}, function(err, events) {
        res.render('admin', {
            pathToRoot: '/',
            pageTitle: 'Admin',
            pageID: 'admin',
        });
    });
});

module.exports = router;