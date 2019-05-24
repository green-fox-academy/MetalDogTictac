"use strict";

let data = "";

const httpRequest = new XMLHttpRequest();

//httpRequest.onreadystatechange = console.log;

httpRequest.open("GET", "http://localhost:3000/getbooktitles");

httpRequest.onload = data => {
  let bookTitles = JSON.parse(data.target.response);

  for (let i = 0; i < bookTitles.length; i++) {
    let newElement = document.createElement("li");
    newElement.innerText = bookTitles[i].book_name;
    document.getElementsByClassName("book-container")[0].appendChild(newElement);
  }
};
httpRequest.send();



const httpChannelForAllBooks = new XMLHttpRequest();
httpChannelForAllBooks.open('GET', 'http://localhost:3000/allbooks');

httpChannelForAllBooks.onload = (data) => { 

    let data1 = JSON.parse(httpChannelForAllBooks.responseText);

    for (let i = 0; i < data1.length; i++) {
      let table = document.getElementById("tablecontent");

      let line = document.createElement("tr");

      let bookName = document.createElement("td");
      bookName.innerText = data1[i].book_name;

      let authorName = document.createElement("td");
      authorName.innerText = data1[i].aut_name;

      let publisherName = document.createElement("td");
      publisherName.innerText = data1[i].pub_name;

      let bookCategory = document.createElement("td");
      bookCategory.innerText = data1[i].cate_descrip;

      let bookPrice = document.createElement("td");
      bookPrice.innerText = data1[i].book_price + "$";

      line.appendChild(bookName);
      line.appendChild(authorName);
      line.appendChild(publisherName);
      line.appendChild(bookCategory);
      line.appendChild(bookPrice);
      table.appendChild(line);
    }
  };
httpChannelForAllBooks.send(data);
