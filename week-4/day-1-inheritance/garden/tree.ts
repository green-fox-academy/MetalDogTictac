"use strict";

import { Plant } from "./plant";

export class Tree extends Plant {
  constructor(
    newColor: string,
    newWaterLevel: number,
    newWaterIntake: number = 0.4
  ) {
    super(newColor, newWaterLevel, newWaterIntake);
    this.color = newColor;
    this.waterLevel = newWaterLevel;
    this.waterIntake = newWaterIntake;
  }

  checkWaterLevel(): void {
    if (this.waterLevel < 10) {
      console.log(`The ${this.color} tree needs water.`);
    } else {
      console.log(
        `The ${this.color} tree does not need to be watered right now.`
      );
    }
  }
}

const purpleTree = new Tree("purple", 4);
const orangeTree = new Tree("orange", 20);
