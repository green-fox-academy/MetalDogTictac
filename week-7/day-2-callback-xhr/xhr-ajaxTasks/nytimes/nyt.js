"use strict";

let ourRequest = new XMLHttpRequest();

ourRequest.open(
  "GET",
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11&api-key=z8jVKItxPWqcHsj9tP7h66hwOffFWCRk", true
);

ourRequest.onload = function() {

  let ourData = JSON.parse(ourRequest.responseText);

  let articles = ourData.response.docs;
  //   console.log(articles[0].headline.content_kicker)
  for (let i = 0; i < articles.length; i++) {

    let newDiv = document.createElement("div");
    newDiv.id = i;

    let newHead = document.createElement("h1");
    
    document.body.appendChild(newDiv);

    let newHead2 = document.createElement("h2");

    let currentDiv = document.getElementById(i);
    currentDiv.appendChild(newHead);

    let newParagraph = document.createElement("p");

    let newLink = document.createElement("a");
    newLink.href = articles[i].web_url;
    currentDiv.appendChild(newLink);
    newLink.innerHTML = "view article";

    currentDiv.appendChild(newHead2);
    currentDiv.appendChild(newParagraph);
    newHead.innerHTML = articles[i].headline.print_headline;
    newParagraph.innerHTML = articles[i].snippet + "<hr></hr>";
    let pubDate = articles[i].pub_date;
    newHead2.innerHTML = pubDate.substr(0, 10);
  }
};
ourRequest.send();
