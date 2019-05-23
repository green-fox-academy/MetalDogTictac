"use strict";

let data = "";

const httpRequest = new XMLHttpRequest();

//httpRequest.onreadystatechange = console.log;

httpRequest.open("GET", "http://localhost:3000/allbookinfo");

//console.log(data.target.response);

httpRequest.onload = () => {
  let allData = JSON.parse(httpRequest.responseText);
  let newTableBody = document.querySelector("tablebody");

  for (let i = 0; i < allData.length; i++) {
    let newTableRow = document.createElement("tr");
    let newBookTitle = document.createElement("td");
    let newAuthor = document.createElement("td");
    let newCategory = document.createElement("td");
    let newPublisher = document.createElement("td");
    let newBookPrice = document.createElement("td");
    newBookTitle.innerHTML = allData[i].book_name;
    newAuthor.innerHTML = allData[i].aut_name;
    newCategory.innerHTML = allData[i].cate_descrip;
    newCategory.className = "category";
    newPublisher.innerHTML = allData[i].pub_name;
    newPublisher.className = "publisher";
    newBookPrice.innerHTML = allData[i].book_price;
    newBookPrice.className = " price";
    newTableBody.appendChild(newTableRow).appendChild(newBookTitle);
    newTableBody.appendChild(newTableRow).appendChild(newAuthor);
    newTableBody.appendChild(newTableRow).appendChild(newCategory);
    newTableBody.appendChild(newTableRow).appendChild(newPublisher);
    newTableBody.appendChild(newTableRow).appendChild(newBookPrice);
  }
};

httpRequest.send();
