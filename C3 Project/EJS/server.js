var express = require('express');
var app = express();

app.use(express.static('views'));

app.use(express.json());

// set the view engine to ejs
app.set('view engine', 'ejs');


// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});
app.get('/index', function(req, res) {
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


app.post('/signup/submit', (req, res) => {
  // Extract form data from the request body
  const { firstName, lastName, email, message } = req.body;
  console.log(req.body);

  // Log the form data for debugging purposes
  console.log(`Received form data: First Name - ${firstName}, Last Name - ${lastName}, Email - ${email}, Message - ${message}`);

  // Here, you can add your logic to save the data to a database or perform other actions

  // Return a response to the client
  res.send(`Signup successful! Name: ${firstName} ${lastName}, Email: ${email}, Message: ${message}`);
});


app.listen(8080);
console.log(`listening on port 8080. Go to http://localhost:8080`);

