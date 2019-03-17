const newman = require('newman');

// Using Newman with the Postman API
// https://github.com/postmanlabs/newman#using-newman-with-the-postman-api
const collection_uid  = '6864925-7a972e88-723a-4893-8910-f0bfaeb055fe';
const environment_uid = '6864925-8ebf7255-c914-446e-b789-a52550f3a5a3';
const api_key = '6feb91e0623149f091c4f61eef11bc58';

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
