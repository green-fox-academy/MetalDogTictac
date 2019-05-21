"use strict";


let ourRequest = new XMLHttpRequest();

let ul = document.querySelector('ul');
let body = document.querySelector('body');

ourRequest.onreadystatechange = console.log;
ourRequest.open("GET", "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11&api-key=z8jVKItxPWqcHsj9tP7h66hwOffFWCRk", true);
console.log(ourRequest.responseText);
httpRequest.send(null);

httpRequest.onload = () => {
  let data = JSON.parse(httpRequest.responseText);  //ask for data in JS object -not raw data
  console.log(data.response.docs[0]);

  let articleTitle = document.createElement('li');  //article titles as li elements
  articleTitle.textContent = data.response.docs[0].title.main;
  ul.appendChild(articleTitle);

  let snippetz = document.createElement('li');      //snippets as li elements
  snippetz.textContent = data.response.docs[0].snippet;
  ul.appendChild(snippetz);

  let pubDate = document.createElement('li');       //publication date as another li element
  pubDate.textContent = data.response.docs[0].pub_date;
  ul.appendChild(pubDate);

  let url = document.createElement('a');            //the link to the web url
  url.innerText = data.response.docs[0].web_url;
  url.setAttribute('href', data.response.docs[0].web_url)
  body.appendChild(url);
}