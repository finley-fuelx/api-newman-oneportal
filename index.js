const newman = require('newman');
const config = require('./env');
// Using Newman with the Postman API
// https://github.com/postmanlabs/newman#using-newman-with-the-postman-api
const api_key = config.api_key;
const collection_uid  = config.collection;
const environment_uid = config.environment;

// call newman.run to pass `options` object and wait for callback
newman.run({
  // collection: require('./collection.json'),
  // environment: require('./environment.json'),
  collection: `https://api.getpostman.com/collections/${collection_uid}?apikey=${api_key}`,
  environment: `https://api.getpostman.com/environments/${environment_uid}?apikey=${api_key}`,
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
