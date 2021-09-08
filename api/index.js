const express = require("express");
const app = express();
const path = require("path");
const serverless = require("serverless-http");

// or with callback

app.listen(process.env.PORT || 5001);

app.use((req, res, next) => {
  res.append("Cache-Control", "123123123123");

  next();
});

app.use(express.static(path.join(__dirname, "./build"), {}));
app.get("/test", (req, res) => {
  res.json("testing");
});

module.exports = app;
module.exports.handler = serverless(app);
