# Express Input Validation Demo

This project demonstrates basic input validation in a Node.js/Express web application using the [express-validator](https://express-validator.github.io/docs/) library. The app uses the MVC pattern and EJS for templating.

## Features
- Registration form with fields for username, email, password, and confirm password
- Server-side validation for username and email
- Error messages displayed for invalid input
- Success page on valid registration

## Current Validation Rules
- **Username**: Must exist and be at least 3 characters long
- **Email**: Must exist and be a valid email address

> **Note:** The registration form includes password and confirm password fields, but these are **not currently validated or processed** on the server side.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/blessedwinner66/Input-validation
   cd Input-validation
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the development server with nodemon:
```bash
npm start
```
The app will run at [http://localhost:3000](http://localhost:3000).

### Usage
1. Visit the home page: [http://localhost:3000](http://localhost:3000)
2. Click "Register" to go to the registration form
3. Fill in the form and submit
4. If there are validation errors (username or email), they will be shown above the form
5. On success, you will see a welcome page with your username and email

## Project Structure
- `app.js` - Main Express app with routes and validation logic
- `views/` - EJS templates for the home, registration, and success pages
- `package.json` - Project metadata and dependencies

## Dependencies
- express
- express-validator
- ejs
- body-parser
- nodemon (dev)

## License
ISC 