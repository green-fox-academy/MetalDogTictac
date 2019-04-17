'use strict';

/* Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!" */

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

const orangePost: PostIt = new PostIt ('orange', 'Idea 1', 'blue');
const pinkPost: PostIt = new PostIt ('pink', 'Awesome', 'black');
const yellowPost: PostIt = new PostIt ('yellow', 'Superb!', 'green');

console.log(orangePost, pinkPost, yellowPost);