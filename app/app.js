const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3500 );
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Doctors Scientific Organica Mix App';

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/admin'));
app.use(require('./routes/manager'));
app.use(require('./routes/schedule'));
app.use(require('./routes/recipe'));

app.get('*', function(req, res){
    res.redirect('404');
  });
  

const server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

//reload(app);