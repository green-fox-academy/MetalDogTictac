"use strict";

let data = "";

let ourRequest = new XMLHttpRequest();

ourRequest.onreadystatechange = console.log;

ourRequest.open(
  "GET",
  "http://api.giphy.com/v1/gifs/search?q=funny+dog&api_key=pE5Vefjd4sv3IlHNIf6pFFuVBledDNOA"
);

console.log(ourRequest.responseText);

ourRequest.onload = () => {
  data = JSON.parse(ourRequest.responseText);

  ourRequest.onerror = function() {
    console.log("connection error");
  };

  for (let i = 0; i < 16; i++) {
    let image = document.createElement("img");

    image.src = data.data[i].images.fixed_height_still.url;
    image.setAttribute("class", "img");
    let body = document.querySelector(".container");
    body.appendChild(image);
  }

  for (let i = 0; i < 16; i++) {
    let movingImages = document.querySelectorAll(".img");
    movingImages[i].onclick = () => {
      movingImages[i].src = data.data[i].images.fixed_height.url;
    };
  }
};

ourRequest.send();
