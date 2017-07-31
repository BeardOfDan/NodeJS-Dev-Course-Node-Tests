"use strict";

// used let instead of const for db because app.test.js uses rewire
// and const made it think it was changing a const so it threw an error
let db = require('./db');

module.exports.handleSignUp = (email, password) => {
  // check if email already exists

  db.saveUser({email, password});

  // send the welcome email
};
