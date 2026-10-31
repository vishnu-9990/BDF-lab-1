
const express = require('express');

const app = express();

// Log the status code of every response
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(
      `${req.method} ${req.originalUrl} ${res.statusCode}`
    );
  });
  next();
});

// Route 1: Welcome page
app.get('/', (req, res) => {
  res.status(200).send('Welcome to my BDF Lab 1');
});

// Route 2: About page
app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'G. Vishnu Vardhan',
    section: 'CSE-QE-2A'
  });
});

// Route 3: Current date and time
app.get('/time', (req, res) => {
  res.status(200).json({
    time: new Date()
  });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

// Start the server
app.listen(3000, () => {
  console.log('Express server running on port 3000');
});
