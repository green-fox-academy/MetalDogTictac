"use strict";

import { Flower } from "./flower";
import { Tree } from "./tree";
import { Plant } from "./plant";

class Garden {
  flowers: Flower[] = [];
  trees: Tree[] = [];

  addFlower(newFlower: Flower) {
    this.flowers.push(newFlower);
  }

  addTree(newTree: Tree) {
    this.trees.push(newTree);
  }

  startWatering(waterAmount: number) {
    let plantsThatNeedToBeWatered = [];

    for (let f: number = 0; f < this.flowers.length; f++) {
      if (this.flowers[f].waterLevel < 5) {
        plantsThatNeedToBeWatered.push(this.flowers[f]);
      }
    }

    for (let t: number = 0; t < this.trees.length; t++) {
      if (this.trees[t].waterLevel < 10) {
        plantsThatNeedToBeWatered.push(this.trees[t]);
      }
    }

    for (let k = 0; k < plantsThatNeedToBeWatered.length; k++) {
      plantsThatNeedToBeWatered[k].watering(
        waterAmount / plantsThatNeedToBeWatered.length
      );
    }
  }

  checkWaterLevel(): void {
    for (let i: number = 0; i < this.flowers.length; i++) {
      if (this.flowers[i].waterLevel < 5) {
        console.log('The ' + this.flowers[i].color + ' Flower needs water.');
      } else {
        console.log('The ' + this.flowers[i].color + ' Flower doesn\'t need water.');
      }
    }

    for (let j: number = 0; j < this.trees.length; j++) {
      if (this.trees[j].waterLevel < 10) {
        console.log('The ' + this.trees[j].color + ' Tree needs water.');
      } else {
        console.log('The ' + this.trees[j].color + ' Tree doesn\'t need water.');
      }
      }
    }
  }

const flower1 = new Flower("yellow", 4);
const flower2 = new Flower("blue", 4);
const tree1 = new Tree("purple", 8);
const tree2 = new Tree("orange", 8);

let garden1: Garden = new Garden();
garden1.addFlower(flower1);
garden1.addFlower(flower2);
garden1.addTree(tree1);
garden1.addTree(tree2);

garden1.checkWaterLevel();


