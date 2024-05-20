// Dependencies
const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");

const PORT = 5600;

const app = express();
const upload = multer();

//* Change with your personal settings
const developerService = "your_email_provider";       // gmail 
const developerEmail = "your_address@gmail.com";      // developersName@gmail.com
const developerPassword = "your_gmail_app_password";  // abcdefghijklmnop

// Replace it with your actual email service credentials
const transporter = nodemailer.createTransport({
  service: developerService,
  auth: {
    user: developerEmail,
    pass: developerPassword,
  }
});

app.post("/send-email", upload.single("file"), async(req, res) => {
  const {name, email, message} = req.body;
  const file = req.file;

  // prepare the email content
  const mailOptions = {
    from: email,
    to: "email_address_to_send_emails",
    subject: "New CV Submission",
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Email: ${message}</p>
    `,
    attachments: file ? [{filename: file.originalname, content: file.buffer}] : [],
  };

  // Send the email
  await transporter.sendMail(mailOptions);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});