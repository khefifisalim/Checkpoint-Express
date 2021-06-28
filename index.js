const express = require("express");
const app = express();

let date = new Date();
let hours = date.getHours();
let days = date.getDay();

app.use((req, res, next) => {
  if (hours < 9 || hours > 17 || days === 6 || days === 0) {
    return res.send("<h1>Out of service </h1>");
  }
  next();
});

app.use(express.static("public"));

app.listen(5000, (err) => {
  err
    ? console.log("error", err)
    : console.log("server is runnig in port 5000");
});
