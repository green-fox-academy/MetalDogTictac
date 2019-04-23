"use strict";

import { Flower } from "./flower";
import { Tree } from "./tree";
import { Plant } from "./plant";

export class Garden extends Plant {
  flowers: Flower[];
  trees: Tree[];

  addFlower(newFlower: Flower) {
    this.flowers.push(newFlower);
  }

  addTree(newTree: Tree) {
    this.trees.push(newTree);
  }

  startWatering(waterAmount: number) {
    let plantsThatNeedToBeWatered = [];

    for (let f: number = 0; f <= this.flowers.length; f++) {
      if (this.flowers[f].waterLevel < 5) {
        plantsThatNeedToBeWatered.push(this.flowers[f]);
      }
    }

    for (let t: number = 0; t < this.trees.length; t++) {
      if (this.trees[t].waterLevel < 10, t++) {
        plantsThatNeedToBeWatered.push(this.trees[t]);
      }
    }
  }
}
