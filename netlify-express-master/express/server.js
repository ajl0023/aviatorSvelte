"use strict";
const express = require("express");
const { dirname } = require("path");
const path = require("path");
const serverless = require("serverless-http");
const app = express();

const router = express.Router();
// app.use("/", express.static(path.join(__dirname, "../build")));
router.get("/", (req, res) => {
  
});
router.get("/another", (req, res) => res.json({ route: req.originalUrl }));
router.post("/", (req, res) => res.json({ postBody: req.body }));

app.use("/.netlify/functions/server", router); // path must route to lambda
app.use("/", (req, res) => res.sendFile(path.join(__dirname, "../build/index.html")));

module.exports = app;
module.exports.handler = serverless(app);
