const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

router.get('/404', function(req, res, next) {
    res.render('404', {
        pathToRoot: '/',
        pageTitle: '404',
        pageID: '404',
    });
});

module.exports = router;