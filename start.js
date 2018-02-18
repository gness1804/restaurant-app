const mongoose = require('mongoose');
const verifyNode = require('./scripts/verifyNode');

// Make sure we are running node 7.6+
verifyNode();

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`There was an error connecting to the database: → ${err.message}`);
});

// READY?! Let's go!

// Start our app!
const app = require('./app');

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
