"use strict";

const express = require('express');

const utils  = require('../utils/utils');

let app = express();

app.get("/", (req, res, next) => {
  res.status(404).send({error: "Page not found.", name: "Todo App"});
});

app.get("/users", (req, res, next) => {
  res.send([
    {
      name: "Dude",
      age: 23
    }, {
      name: "Dan",
      age: 24
    }
  ]);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

module.exports.app = app;
