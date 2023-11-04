const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;

var names = require("dota2-heroes");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  names.random();
  res.render("script.ejs", {
    dota_name1: names.random(),
    dota_name2: names.random(),
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
