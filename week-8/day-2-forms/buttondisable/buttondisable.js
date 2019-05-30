"use strict";

const dog = document.querySelector("#dog");
const cat = document.querySelector("#cat");
const fish = document.querySelector("#fish");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");

const iLoveCatsButton = document.querySelector("#ilovecats");
const signUpButton = document.querySelector("#signup");

let allInputFields = document.querySelectorAll("input");

let messageField = document.querySelector("#message-field");

allInputFields.forEach(element => {
  element.addEventListener("click", function() {
    if ((dog.checked || cat.checked) || (fish.checked && no.checked)) {
      signUpButton.removeAttribute("disabled");
    } else if (yes.checked) {
      iLoveCatsButton.removeAttribute("disabled");
    }
  });
});

iLoveCatsButton.addEventListener("click", function() {
  if (yes.checked) {
    window.alert("Thank you, you successfully signed up for cat facts");
  }
});

signUpButton.addEventListener("click", function() {
  if (fish.checked && no.checked) {
    signUpButton.removeAttribute("disabled");
    window.alert("Sign, we still added you to the cat facts list.");
  } else {
    window.alert("Thank you, you successfully signed up for cat facts");
  }
});
