// Import Express and set up the app
const express = require('express');
const pug = require('pug');
const app = express();
// Set view engine to pug
app.set('view engine', 'pug');

// Import routes
const routes = require('./routes');

// Import 404 and global error handlers
const errorHandlers = require('./errorHandlers');

// Add Static 
app.use(express.static('public'));

// Pass route handlers to the app
app.use(routes);

// Pass 404 and global error handlers to the app
app.use(errorHandlers.handleFourOhFour);
app.use(errorHandlers.handleGlobalError);

// Start Express server
app.listen(3000, () => {
  console.log('The server is now listening on port 3000');
});