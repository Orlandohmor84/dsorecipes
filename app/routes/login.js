const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Recipes = require('../models');

router.post('/login', function(req, res, next) {
    if (req.body.inputUsername == 'admin' && req.body.inputPassword == 'Lavi12103196') {
        console.log(Recipes);
        Recipes.find({}, function(err, recipes) {
            res.render('admin', {
                recipes: recipes,
                pathToRoot: '/',
                pageTitle: 'Admin Portal',
                pageID: 'admin',
        });
    });
    } else if (req.body.inputUsername == 'manager' && req.body.inputPassword == 'Lavi4800') {
        res.render('manager', {
            pathToRoot: '/',
            pageTitle: 'Manager Portal',
            pageID: 'manager',
        });
    }
});

module.exports = router;