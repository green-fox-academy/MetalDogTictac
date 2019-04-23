'use strict';

export class Plant {
  color: string;
  waterLevel: number;
  waterIntake: number;

  constructor(newColor: string, newWaterLevel: number, newWaterIntake: number) {
    this.color = newColor;
    this.waterLevel = newWaterLevel;
    this.waterIntake = newWaterIntake;
  }

  giveWater(newWaterAmount: number) {
    this.waterLevel = newWaterAmount * this.waterIntake;
  }
}