/* You should create a logic that can double the provided number.

Create a GET /doubling endpoint
It should be able to handle a query parameter called input, eg. http://localhost:8080/doubling?input=15
This endpoint should respond with a json object with the doubled amount of the input:
{
  "received": 15,
  "result": 30
}
If no input is provided it should return:
{
  "error": "Please provide an input!"
}
Check your application in the browser and click on the Try doubling endpoint button. */

const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/doubling", (req, res) => {
  let input = req.query.input;
  let answer = {};

  if (input) {
    (answer.received = input), 
    (answer.result = input * 2);
  } else {
    answer.error = "Please provide an input!";
  }

  res.send(answer);
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
