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


app.post("/signup", (req, res) => {
  let fName = req.body.fName;
  let lName = req.body.lName;
  let email = req.body.email;
  let comments = req.body.comments;

  let sendEmail = false;

  console.log(req.body);

  // Receieves data and sends it back to confirm it was sent correctly
  //  (also uses response from server in alert box)
  let reply = { fName: fName, lName: lName, email: email, comments: comments, sendEmail: sendEmail };

  res.json(reply);

  // TODO: Save details to database

  // TODO: Receive verification from database & send to client

  // TODO: Send email of confirmation

});



app.listen(port);
console.log(`listening on port ${port}. Go to http://localhost:${port}`);

