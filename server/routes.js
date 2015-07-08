/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/sets', require('./api/sets'));
  app.use('/api/user', require('./api/user'));
  app.use('/api/cells', require('./api/cells'));


  app.use('/auth', require('./auth'));

    // All other routes should redirect to the index.html
  app.route('/')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
  });
  
  // All undefined asset or api routes should return a 404
  app.route('/*')
   .get(errors[404]);


};