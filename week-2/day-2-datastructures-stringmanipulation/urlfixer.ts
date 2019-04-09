"use strict";
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = "https//www.reddit.com/r/nevertellmethebots";

//method 1

url = url.replace(
  "https//www.reddit.com/r/nevertellmethebots",
  "https://www.reddit.com/r/nevertellmetheodds"
);

console.log(url);

//method 2

function fixMyUrl(a: string) {
  let startArray: string[] = a.split("");
  startArray.splice(5, 0, ":");
  startArray.splice(-4, 4, "odds");
  let output: string = startArray.join("");
  return output;
}
console.log(fixMyUrl(url));
