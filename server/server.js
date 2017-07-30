"use strict";

const express = require('express');

let app = express();

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
