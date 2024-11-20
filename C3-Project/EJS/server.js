const port = 8080;

var express = require('express');
var app = express();

app.use(express.static('views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require("path");

app.set('view engine', 'ejs');


// Rendering pages depending on URL

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



// Functions and variables for sending email after form is received and validated

const nodemailer = require("nodemailer");
const { send } = require('process');

// Creating the transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "cpm24usu@gmail.com",
    pass: "", // generate new password if no longer works from https://myaccount.google.com/apppasswords?pli=1&rapt=AEjHL4PtaIoXu-RWAKJkxzNueYLsFqJIWTaEZH93fZR-3_DOxHNgh8kyU7EXJub0QKlItrrf0lxiIT6Lt5qnKT9SeLkoNyG9DICGV8XDTlmXsMlrIqSm6RY
  },
});

// Changing target email & body
let mailOptions;

function options(forename, surname, addressee, body) {
  mailOptions = {
    from: "cpm24usu@gmail.com",
    to: addressee,
    subject: "UN Sustainable Development Newsletter (Test Email)",
    text: `This email is a test email to ${forename} ${surname} at ${addressee}.\n\n${body}`,
  };
};

// Send the email using transporter and options using data from the form
function sendEmail(settings) {
  transporter.sendMail(settings, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};



// Actions when form is submitted

app.post("/signup", (req, res) => {
  let fName = req.body.fName;
  let lName = req.body.lName;
  let email = req.body.email;
  let comments = req.body.comments;


  let send = false;

  if (/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email) && /^[a-zA-Z]+$/.test(fName)  && /^[a-zA-Z]+$/.test(lName)) {
    console.log("Email and name validated");
    send = true;
  }
  else {
    console.log("Email or name not validated");
    if (!(/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email))) {
      console.log("Email not valid");
    }
    if (!(/^[a-zA-Z]$/.test(fName))) {
      console.log("First name not valid");
    }
    if (!(/^[a-zA-Z]$/.test(lName))) {
      console.log("Last name not valid");
    }
  };

  console.log(req.body);

  // Receieves data and returns it to the client for a popup alert box confirming signup
  let reply = { fName: fName, lName: lName, email: email, comments: comments, sendEmail: sendEmail };
  res.json(reply);
  // Move to if statement below once validation is complete



  // TODO: Save details to database
    // Could also only be done if verification is successful
    // Could wait to send back to client & send email until checking if email already exists in database



  // If verification is successful, email is sent
  if (send) {
    options(fName, lName, email, `Hello, ${fName} ${lName}. Your email: ${email}. Your comments: \n\n${comments}`);
    sendEmail(mailOptions);
  }
  else { // Otherwise, contents are sent to console and email is not sent
    options(email, `Hello, ${fName} ${lName}. Your email: ${email}. Your comments: ${comments}`);
    console.log("Email not sent");
  }

});

app.listen(port);
console.log(`listening on port ${port}. Go to http://localhost:${port}`);
