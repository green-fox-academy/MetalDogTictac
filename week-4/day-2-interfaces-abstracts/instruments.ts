"use strict";

abstract class Instrument {
  abstract name: string;
  play(): void {}
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
}

class ElectricGuitar extends StringedInstrument {
  name: string = "Electric Guitar";

  constructor(numberOfStrings: number = 6) {
    super();
    this.numberOfStrings = numberOfStrings;
  }

  sound(): string {
    return "Twang";
  }

  play(): void {
    console.log(
      `${this.name}, a ${
        this.numberOfStrings
      } instrument that goes ${this.sound()}.`
    );
  }
}

class BassGuitar extends StringedInstrument {
  name: string = "Bass Guitar";

  constructor(numberOfStrings: number = 4) {
    super();
    this.numberOfStrings = numberOfStrings;
  }

  sound(): string {
    return "Duum duum duum";
  }

  play(): void {
    console.log(
      `${this.name}, a ${
        this.numberOfStrings
      } instrument that goes ${this.sound()}.`
    );
  }
}

class Violin extends StringedInstrument {
  name: string = "Violin";

  constructor(numberOfStrings: number = 4) {
    super();
    this.numberOfStrings = numberOfStrings;
  }

  sound(): string {
    return "Screech";
  }

  play(): void {
    console.log(
      `${this.name}, a ${
        this.numberOfStrings
      } instrument that goes ${this.sound()}.`
    );
  }
}

export { ElectricGuitar, BassGuitar, Violin };
