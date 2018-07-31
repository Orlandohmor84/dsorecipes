const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

router.get('/', function(req, res, next) {
        res.render('index', {
            pathToRoot: '/',
            pageTitle: 'Login',
            pageID: 'login',
        });
});

module.exports = router;