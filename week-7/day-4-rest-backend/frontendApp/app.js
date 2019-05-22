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
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/doubling", (req, res) => {
  let input = req.query.input;
  let answer = {};

  if (input) {
    (answer.received = input), (answer.result = input * 2);
  } else {
    answer.error = "Please provide an input!";
  }

  res.send(answer);
});

/* This is the continuation of the previous Frontend exercise, you should extend that with a new endpoint.

You should create a logic that can greet someone by his/her name and title.

Create a GET /greeter endpoint
that can receive a query parameter like name=Petike&title=student
and responds with an awesome greeting json object:
{
  "welcome_message": "Oh, hi there Petike, my dear student!"
}
if any of the data is missing, respond with one of the following error messages:
{
  "error": "Please provide a name and a title!"
}
{
  "error": "Please provide a title!"
}
```json
{
  "error": "Please provide a name!"
} */

app.get("/greeter", (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  let answer = {};

  if (!name && !title) answer.error = "Please provide a name and title";
  if (name && !title) answer.welcome_message = "Please provide a title";
  if (name && title)
    answer.welcome_message = `Oh, hi there ${name}, my dear ${title}!`;
  res.send(answer);
});

/* This is the continuation of the previous Frontend exercise, you should extend that with a new endpoint.

You should create a logic that can receive a string and append an A letter to it.

Create a dynamic GET /appenda/{appendable} endpoint
that responds with the appended a:
eg. /appenda/kuty
responds with:
{
  "appended": "kutya"
}
if no appendable is provided, thats a different endpoint -> so the server should respond with 404
Check your application in the browser and click on the Try appenda endpoint button. */

app.get("/appenda/:id", (req, res) => {
    if(!req.params.id) {
        res.send("error 404");
    } else {
        res.send({"appended": req.params.id + "a"});
    }
})

/* This is the continuation of the previous Frontend exercise, you should extend that with a new endpoint.

You should create a logic that can do an action until a specific number

Create a dynamic POST /dountil/{action} endpoint
That receives a number in a json object:
{
  "until": 15
}
and responds with sum or multiplication of all elements until that number:
eg. /dountil/sum with {"until": 5} will respond {"result": 15}
eg. /dountil/factor with {"until": 5} will respond {"result": 120}
if no number is provided:
{
  "error": "Please provide a number!"
}
Check your application in the browser and click on the Try dountil endpoint button. */

app.post("/dountil/:action", (req, res) => {
    let answer = {};

    if(req.params.action === 'sum' && req.body.until) {
        answer = {result: sumOf(req.body.until)};
    } else if (req.params.action === 'factor' && req.body.until) {
        answer = {result: factorialOf(req.body.until)};
        console.log(answer);
    } else {
        answer = {"error": "Please provide a number!"};
    }
    res.send(answer);
});

function sumOf(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function factorialOf(n) {
    let sum = 1;
    for(let i = 1; i <= n; i++) {
        sum *= i;
    }
    return sum;
}





app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
