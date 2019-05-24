var pageCounter = 1;

var animalContainer = document.getElementById("animal-info");

var btn = document.getElementById("btn"); //save the button in a var

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest(); //the AJAX call to run new data runs as soon as the page loads

  ourRequest.onerror = function() { //what shall happen when the connection fails
    console.log("connection error");
  }

  ourRequest.open(
    //get data from the desired url
    "GET",
    "https://learnwebcode.github.io/json-example/animals-" +
      pageCounter +
      ".json"
  );

  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {  //implementing basic error handling for AJAX
        var ourData = JSON.parse(ourRequest.responseText); //the content in the url will be passed as json object
        renderHTML(ourData);
    } else {
        console.log('We connected to the server but it returned an error');
    }
    
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me"); //add CSS class for hide-me and set it to value 'hidden'
  }
});


function renderHTML(data) {
  //function's job is to add html to the page

  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString +=
      "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += " and dislikes ";

    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }

    htmlString += "</p>";
  }

  animalContainer.insertAdjacentHTML("beforeend", htmlString);
}
