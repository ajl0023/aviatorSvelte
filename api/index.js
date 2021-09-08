const express = require("express");
const app = express();
const path = require("path");
const serverless = require("serverless-http");

// or with callback

const router = express.Router();

router.get("/test", (req, res) => {
  console.log("reeeeeeeeeeeeeee");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello from Express.js!</h1>");
  res.end();
});
router.get("/another", (req, res) => res.json({ route: req.originalUrl }));
router.post("/", (req, res) => res.json({ postBody: req.body }));

app.use("/.netlify/functions/server", router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
