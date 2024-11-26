const port = 8080;

var express = require('express');
var app = express();

app.use(express.static('views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');


// Rendering pages depending on URL

// index page
app.get('/', (req, res) => {
  res.render('pages/index');
});
app.get('/index', (req, res) => { //same as above, just for index in the URL
  res.render('pages/index');
});

// team info page
app.get('/team', (req, res) => {
  res.render('pages/team');
});

// signup page
app.get('/signup', (req, res) => {
  res.render('pages/signup');
});

// goial 6 page
app.get('/goal6', (req, res) => {
  res.render('pages/goal6');
});

// goal 12 page
app.get('/goal12', (req, res) => {
  res.render('pages/goal12');
});

// goal 13 page
app.get('/goal13', (req, res) => {
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
    pass: "",
    // generate new password if no longer works https://myaccount.google.com/apppasswords
    // Change email if different account is sending emails
    // Don't leave password in code when committing, otherwise GitHub sends an email saying you have a data leak
  },
});

// Changing target email, subject & body
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
      console.error("Error sending email: ", error); // Can comment out later, used for testing
    } else {
      console.log("Email sent: ", info.response); // Can comment out later, used for testing
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
    console.log("Email and name validated"); // Can comment out later, used for testing
    send = true;
  }
  else {
    if (!(/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email))) {
      console.log("Email not valid"); // Can comment out later, used for testing
    }
    if (!(/^[a-zA-Z]+$/.test(fName))) {
      console.log("First name not valid"); // Can comment out later, used for testing
    }
    if (!(/^[a-zA-Z]+$/.test(lName))) {
      console.log("Last name not valid"); // Can comment out later, used for testing
    }
  };

  console.log(req.body); // Can comment out later, used for testing


  // TODO: Save details to database
    // Could also only be done if verification is successful
    // Could wait to send back to client & send email until checking if email already exists in database



  // If verification is successful, email is sent
  if (send) {
    // Receieves data and returns it to the client for a popup alert box confirming signup
    let reply = { fName: fName, lName: lName, email: email, comments: comments, send:send };
    res.json(reply);

    // Fills emailOptions with data from form and sends email
    options(fName, lName, email, `Hello, ${fName} ${lName}. Your email: ${email}. Your comments: \n\n${comments}`);
    sendEmail(mailOptions);
  }
  else { // If verification is not successful, email is not sent and client is notified
    options(email, `Hello, ${fName} ${lName}. Your email: ${email}. Your comments: ${comments}`);
    console.log("Email not sent"); // Can comment out later, used for testing

    // Still returns data to client-side for a popup saying unsuccessful signup
    let reply = { fName: fName, lName: lName, email: email, comments: comments, send: send };
    res.json(reply);
  }

});

// Start listening on port and print to console
app.listen(port);
console.log(`listening on port ${port}. Go to http://localhost:${port}`);
