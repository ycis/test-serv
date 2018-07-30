var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 8080;

app.use(bodyParser.json());

var characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  }
];
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});
app.post("/api/characters", function(req, res) {
  var newcharacter = req.body;
  console.log(newcharacter);
  characters.push(newcharacter);
  res.json(newcharacter);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});