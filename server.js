var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;
var characters = [
    {
    "stuff": "things"
    }
]
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.send("Welcome to the Page!");
  });
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