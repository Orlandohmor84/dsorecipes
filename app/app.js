const express = require('express');
const methodOverride = require('method-override');
const reload = require('reload');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const modelRecipes = require('./models/recipes');
const Recipe = modelRecipes.Recipe;
const app = express();

//Set up default mongoose connection
//let uri = 'mongodb://1:2@ds237989.mlab.com:37989/heroku_pv49n3mv';
let uri = 'mongodb://orlando:Lavi4800@ds159641.mlab.com:59641/heroku_j60d59b1';
mongoose.connect(uri);

//Get the default connection
let data = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
data.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3500 );
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Doctors Scientific Organica Mix App';

// override with POST having ?_method=PUT
app.use(methodOverride('_method'));

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/dashboard'));
app.use(require('./routes/admin'));
app.use(require('./routes/schedule'));
app.use(require('./routes/schedule-add'));
app.use(require('./routes/schedule-review'));
app.use(require('./routes/recipes'));
app.use(require('./routes/recipe'));
app.use(require('./routes/event'));
app.use(require('./routes/dep-mix'));
app.use(require('./routes/dep-mix-schedule-add'));
app.use(require('./routes/dep-mix-schedule-review'));
app.use(require('./routes/404'));

app.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /");
});

app.get('*', function(req, res){
    res.redirect('404');
  });
  

const server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(app);