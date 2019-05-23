"use strict";

let data = "";

const httpRequest = new XMLHttpRequest();

//httpRequest.onreadystatechange = console.log;

httpRequest.open("GET", "http://localhost:3000/getbooktitles");

//console.log(data.target.response);

httpRequest.onload = data => {
  //console.log(data);

  let bookTitles = JSON.parse(data.target.response);

  for (let i = 0; i < bookTitles.length; i++) {
    let uls = document.getElementsByTagName("ul")[0];
    uls.appendChild(document.createElement("li")).innerText =
      bookTitles[i].book_name;
  }
};

httpRequest.send();
