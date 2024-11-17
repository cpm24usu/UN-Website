const port = 8080;

var express = require('express');
var app = express();

app.use(express.static('views'));

const bodyParse = require('body-parser');
app.use(bodyParse.urlencoded({ extended: false }));

app.set('view engine', 'ejs');


// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});
app.get('/index', function(req, res) { //same as above, just for index in the URL
  res.render('pages/index');
});

// team info page
app.get('/team', function(req, res) {
  res.render('pages/team');
});

// signup page
app.get('/signup', function(req, res) {
  res.render('pages/signup');
});

// goial 6 page
app.get('/goal6', function(req, res) {
  res.render('pages/goal6');
});

// goal 12 page
app.get('/goal12', function(req, res) {
  res.render('pages/goal12');
});

// goal 13 page
app.get('/goal13', function(req, res) {
  res.render('pages/goal13');
});


app.listen(port);
console.log(`listening on port ${port}. Go to http://localhost:${port}`);



app.post('/signup', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;

  // console.log(`${firstName} ${lastName}, ${email}, ${message}`);

  res.send(`<script>alert('You have successfully signed up, ${firstName}!'); window.location.href='../signup';</script>`);

  // TODO: Save details to database

  // TODO: Verify details

  // TODO: Send confirmation on-screen

  // TODO: Send email of confirmation
});

