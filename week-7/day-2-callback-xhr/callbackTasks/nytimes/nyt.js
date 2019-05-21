"use strict";

let data = "";

let ourRequest = new XMLHttpRequest();

ourRequest.onreadystatechange = console.log;

ourRequest.open(
  "GET",
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11&api-key=z8jVKItxPWqcHsj9tP7h66hwOffFWCRk",
  true
);

console.log(ourRequest.responseText);

ourRequest.onload = () => {
  data = JSON.parse(ourRequest.responseText);

  ourRequest.onerror = function() {
    console.log("connection error");
  };

  
};

ourRequest.send();