'use strict';

export class Aircraft {
  currentAmmo: number;
  maxAmmo: number;
  baseDamage: number;
  type: string;

  constructor(newCurrentAmmo: number = 0, newMaxAmmo: number, newBaseDamage: number, newType: string) {
    this.currentAmmo = newCurrentAmmo;
    this.maxAmmo = newMaxAmmo;
    this.baseDamage = newBaseDamage;
    this.type = newType;
  }

  fight(newCurrentAmmo: number) {
    return this.baseDamage *= newCurrentAmmo;
  }

  getType(): string {
    return this.type;
  }

  getStatus(): void {
    console.log(`Type ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage ${}`);
  }

  isPriority(): boolean {
    if (this.type === 'F35') {
      return true;
    } else {
      return false;
    }
  }
}