# Full-Stack Contact and CV Submission Application

This project is a full-stack application built with React for the front end and Node.js/Express for the back end. The application includes a contact form for sending messages and another form for uploading a CV or photo, which is then sent via email.

## Features

- **Contact Form:** Allows users to submit their contact information and a message.
- **CV/Photo Submission Form:** Allows users to upload a file (CV or photo) along with their details.
- **Email Service:** Backend processes the forms, sending the data and attached files as an email.

## Technologies Used

### Front End

- React
- HTML/CSS

### Back End

- Node.js
- Express.js
- Multer (for handling file uploads)
- Nodemailer (for sending emails)

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your system. If not, you can download them from [Node.js official site](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project-directory

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
    cd ../frontend
    npm install
```

### Running the Application

**Backend**

1. Navigate to the backend directory:

```bash
cd backend
```

2. Start the backend server in development mode (with nodemon):

```bash
npm run start-dev
```

3. The server will be listening on port 5600 by default. You can change the port by modifying the PORT variable in backend/index.js.

**Frontend**
  
1. Navigate to the frontend directory:

```bash
cd ../frontend
```

2. Start the frontend development server:

```bash
npm start
```

3. The React app will be running on http://localhost:3000.

## Configuration

Replace the following credentials in backend/index.js with your actual email service credentials:

```javascript
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  }
});
```

## API Endpoints

### POST /send-email

This endpoint accepts form data including user details and a message. It sends an email with the provided information.

**Request**
  - name (string): The name of the user.
  - email (string): The email address of the user.
  - message (string): A message from the user.

### POST /submit-cv

This endpoint accepts form data including user details and a file (CV or photo). It sends an email with the provided information and attachment.

**Request**
  - name (string): The name of the user.
  - email (string): The email address of the user.
  - message (string): A message from the user.
  - file (file): The CV or photo to be attached.

## Directory Structure
```scss
project-directory/
│
├── backend/
│   ├── index.js
│   ├── package.json
│   └── ... (other backend files)
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── EmailForm.js
│   │   ├── App.js
│   │   └── ... (other frontend files)
│   ├── package.json
│   └── ... (other frontend files)
│
└── README.md
```
