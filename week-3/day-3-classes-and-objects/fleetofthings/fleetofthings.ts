"use strict";

import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Create a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

let thing1: Thing = new Thing("Get milk");
let thing2: Thing = new Thing("Remove the obstacles");
let thing3: Thing = new Thing("Stand up");
let thing4: Thing = new Thing("Eat lunch");

fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);
thing3.complete();
thing4.complete();

function printList() {
  for (let i: number = 0; i < fleet.getThings().length; i++) {
    if (fleet.getThings()[i].getCompleted()) {
      console.log(`${i + 1} [x] ${fleet.getThings()[i].getName()}`);
    } else {
      console.log(`${i + 1} [ ] ${fleet.getThings()[i].getName()}`);
    }
  }
}

printList();
