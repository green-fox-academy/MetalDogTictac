"use strict";

import { Plant } from "./plant";

export class Flower extends Plant {
  constructor(
    newColor: string,
    newWaterLevel: number,
    newWaterIntake: number = 0.75
  ) {
    super(newColor, newWaterLevel, newWaterIntake);
    this.color = newColor;
    this.waterLevel = newWaterLevel;
    this.waterIntake = newWaterIntake;
  }

  checkWaterLevel(): void {
    if (this.waterLevel < 5) {
      console.log(`The ${this.color} flower needs water.`);
    } else {
      console.log(
        `The ${this.color} flower does not need to be watered right now.`
      );
    }
  }
}
