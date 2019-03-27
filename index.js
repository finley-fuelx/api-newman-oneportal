const newman = require('newman');
require('dotenv').config();
// Using Newman with the Postman API
// https://github.com/postmanlabs/newman#using-newman-with-the-postman-api

// call newman.run to pass `options` object and wait for callback
newman.run({
  // collection: require('./collection.json'),
  // environment: require('./environment.json'),
  collection: `https://api.getpostman.com/collections/${process.env.COLLECTION_UID}?apikey=${process.env.API_KEY}`,
  environment: `https://api.getpostman.com/environments/${process.env.ENVIRONMENT_UID}?apikey=${process.env.API_KEY}`,
  folder: ``,
  reporters: ['cli', 'html'],
  reporter: {
    // https://github.com/postmanlabs/newman-reporter-html#readme
    html: {
      // // If not specified, the file will be written to `newman/` in the current working directory.
      // export: './htmlResults.html',

      // optional, this will be picked up relative to the directory that Newman runs in.
      template: './report-html-templates/htmlreqres.hbs'
    }
  }
}, function (err) {
  if (err) { throw err; }
  console.log('collection run complete!');
});
