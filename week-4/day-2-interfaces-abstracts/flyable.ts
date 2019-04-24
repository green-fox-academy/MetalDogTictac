"use strict";

interface Flyable {
  land(): void;
  fly(): void;
  takeOff(): void;
}

abstract class Vehicle {
  wheels: number;
  color: string;
  speed: number;
}

class Helicopter extends Vehicle implements Flyable {
  land(): void {}
  fly(): void {}
  takeOff(): void {}

  constructor(wheels: number, color: string, speed: number) {
    super();
    this.wheels = wheels;
    this.color = color;
    this.speed = speed;
  }
}

const heli1: Helicopter = new Helicopter(4, "blue", 40);
console.log(heli1);
