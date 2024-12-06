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

// Importing modules
const nodemailer = require("nodemailer");
const { send } = require('process');
const fs = require('fs');

// auth details for transporter
const details = {
  user: "cpm24usu@gmail.com",
  pass: "",  // I would use an authenicator in a more serious case, bbut for this I am using a plaintext password
}; // https://myaccount.google.com/apppasswords

// Creating the transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: details,
});

// Changing target email, subject & body
let mailOptions; // Declaring the variable here so it is accessible outside the function

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


// Function to write user details to a JSON file on form submission
// This is called after validation so don't need to validate again here
let successfulWrite;
function addUser(fName, lName, email, comments) {
  let data;
  try {
    // Read the existing data from the file
    data = JSON.parse(fs.readFileSync('../users.json', 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') {
      // If the file doesn't exist, create an empty array for users
      data = { users: [] };
    } else {
      throw err;
    }
  }

  // Checks if the entered email already exists in the file
  const existingUser = data.users.find(user => user.email === email);
  if (existingUser) {
    //console.log('Email already exists');
    successfulWrite = `duplicateEmail`;
  }
  else { // Only attempts to add user if email does not exist
    // Add the new user to the users array
    data.users.push({ fName, lName, email, comments });

    // Write the updated data back to the file
    try{
      fs.writeFileSync('../users.json', JSON.stringify(data, null, 2));
      successfulWrite = `true`;
    } catch (err){
      console.log(err);
      successfulWrite = `false`;
    };
    //console.log('User added successfully');
  }
}


// Actions when form is submitted

app.post("/signup", (req, res) => {
  // Assigning data received from form
  let fName = req.body.fName;
  let lName = req.body.lName;
  let email = req.body.email;
  let comments = req.body.comments;

  let send;

  // Validating form data
  if (/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email) && /^[a-zA-Z]+$/.test(fName)  && /^[a-zA-Z]+$/.test(lName)) { // Using RegEx to validate form details
    //console.log("Email and name validated"); // Can comment out later, used for testing
    send = `all valid`;
  }
  else {
    if (!(/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email))) {
      //console.log("Email not valid"); // Can comment out later, used for testing
      send = `${send}; email invalid format`;
    }
    if (!(/^[a-zA-Z]+$/.test(fName))) {
      //console.log("First name not valid"); // Can comment out later, used for testing
      send = `${send}; fName invalid`;
    }
    if (!(/^[a-zA-Z]+$/.test(lName))) {
      //console.log("Last name not valid"); // Can comment out later, used for testing
      send = `${send}; lName invalid`;
    }
  };

  // If verification is successful & password is filled, email is sent
  if (details.pass === "") {
    //console.log(`Password is empty; not sending email.`);
    send = `${send}; password empty`;
  }
  if (send == `all valid`) {
    //console.log(`all fields valid; password present; writing to JSON and sending email.`); // Used for testing
    // Receieves data and returns it to the client for a popup alert box confirming signup
    let reply = { fName: fName, lName: lName, email: email, comments: comments, send:send };

    // Writes data to JSON file
    addUser(fName, lName, email, comments);
    if (successfulWrite == `true`) {
      //console.log(`Sending email (successfulWrite = true)`);
      // Fills emailOptions with data from form and sends email only if data was written to JSON successfully
      options(fName, lName, email, `Hello, ${fName} ${lName}. Your email: ${email}. Your comments: \n\n${comments}`);
      sendEmail(mailOptions);
      //console.log(`Email sent to ${email}`);
    }
    else if (successfulWrite == `duplicateEmail`) {
      reply.send = `${send}; duplicate email`;
    };

    res.json(reply); // Only returns after email is sent

  }
  else { // If verification is not successful, email is not sent and client is notified
    options(email, `Hello, ${fName} ${lName}. Your email: ${email}. Your comments: ${comments}`);
    //console.log("Email not sent"); // Can comment out later, used for testing

    // Still returns data to client-side for a customizable popup
    let reply = { fName: fName, lName: lName, email: email, comments: comments, send: send };
    res.json(reply);
  }

  //console.log(`send: ${send}\n\n`); // Used for testing & checking custom popup messages client-side
});

// Start listening on port and print to //console
app.listen(port);
console.log(`listening on port ${port}. Go to http://localhost:${port}\n`);
