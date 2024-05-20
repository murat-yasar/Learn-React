# CV Submission Email Service

This project is a Node.js application that allows users to submit their CVs via a web form. 
The application uses Express.js to handle HTTP requests, Multer to handle file uploads, and Nodemailer to send the emails.

## Features

- Accepts user details (name, email, message) and a file (CV).
- Sends an email with the user's details and attached CV to specified email addresses.

## Technologies Used

- Node.js
- Express.js
- Multer
- Nodemailer

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your system. If not, you can download it from [here](https://nodejs.org/).

### Installation

1. Clone the repository:
```bash
git clone https://github.com/murat-yasar/React-Projects/email-app/email-app-server
cd email-app-server
```

2. Install the dependencies:
```bash
npm install
npm install express multer nodemon nodemailer
```

### Running the Application
1. To start the server in development mode (with nodemon):
```bash
npm run start-dev
```

2. To start the server in production mode:
```bash
npm start
```

## API Endpoints

### POST /send-email

This endpoint accepts form data including user details and a file (CV). It sends an email with the provided information and attachment:

Request
  - name (string): The name of the user.
  - email (string): The email address of the user.
  - message (string): A message from the user.
  - file (file): The CV file to be attached.

## Configuration

Replace the following credentials in index.js with your actual email service credentials:

```javascript
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  }
});
```

