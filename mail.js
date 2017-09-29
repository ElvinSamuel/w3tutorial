var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'elvinsamuel1@gmail.com',
    pass: 'fwnouiud2sise:g'
  }
});

var mailOptions = {
  from: 'elvinsamuel1@gmail.com',
  to: 'elvinmsamuel@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});