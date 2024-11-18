const port = 8080;

var express = require('express');
var app = express();

app.use(express.static('views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require("path");

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


/*
app.post('/signup', (req, res) => {
  res.render('pages/signup');
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let message = req.body.message;

  // console.log(`${firstName} ${lastName}, ${email}, ${message}`);

  // TODO: Save details to database

  // TODO: Receive verification

  // TODO: Send confirmation on-screen, currently displays success without any verification/storage
  res.send(`<script>alert('You have successfully signed up, ${firstName}!'); window.location.href='../signup';</script>`);

  // TODO: Send email of confirmation
});
*/


app.post("/signup", (req, res) => {
  let fName = req.body.fName;
  let lName = req.body.lName;
  let email = req.body.email;
  let message = req.body.message;

  console.log(req.body);

  let reply = { fName: fName, lName: lName, email: email, message: message };

  console.log(reply);

  res.json(reply);
});
