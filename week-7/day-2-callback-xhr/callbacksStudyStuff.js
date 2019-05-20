//callback is a function that is invoked after something happens

//first example

function mainFunction(callback) {
  var someData = "Here is some data";

  callback(someData);
}

mainFunction(function(a) {
  //this function that we pass into, we assume we will get sth back from the main function
  console.log(a);
});

mainFunction(function(b) {
  console.log(b);
});

//exercise 2, setting timeout

let logCall = function() {
  console.log("locCall was called back");
};

setTimeout(function() {
  console.log("The function was called back");
}, 3000);

//exercise 3, setting callback on button click

let btn = document.querySelector("#item1");

btn.addEventListener("click", function(e) {
  console.log("the button was clicked");
});

//exercise 4

let students = [
  { name: "Mary", score: 90, school: "East" },
  { name: "Joe", score: 95, school: "East" },
  { name: "Jane", score: 80, school: "West" },
  { name: "Gabe", score: 70, school: "East" },
  { name: "Rochelle", score: 9, school: "East" },
  { name: "Lili", score: 100, school: "West" }
];

let processStudents = function(data, callback) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].school.toLowerCase() === "east") {
      if (typeof callback === "function") {
        callback(data[i]);
      }
    }
  }
};

processStudents(students, function(obj) {
  if (obj.score > 60) {
    console.log(obj.name + " passed.");
  }
});

//compute all the scores together for East
let determineTotal = function() {
  let total = 0,
    count = 0;

  processStudents(students, function(obj) {
    total = total + obj.score;
    count++;
  });
  console.log("Total score: " + total + " - Total Count: " + count);
};

determineTotal();

//NetNinja javascript timers

var myMessage = document.getElementById("message");

function showMessage() {
  myMessage.className = "show";
}

setTimeout(showMessage, 3000); //set timeout so the function will fire after certain time

//set interval

var colorChanger = document.getElementById('colour-changer');

var colours = ['red', 'blue', 'green', 'brown' ];
var counter = 0;

function changeColor() {

    if (counter >= colours.length) {
        counter = 0;
    }
    colourChanger.style.background = colours[counter];
    counter++;
}

var myTimer = setInterval(changeColor, 3000);

colourChanger.onclick = function() {
    clearInterval(myTimer);
    colourChanger.innerHTML = 'Timer stopped.';
}
