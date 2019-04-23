'use strict';

import { Aircraft } from './aircraft';

class F16 extends Aircraft {
  
  constructor() {
    super('F16');
    this.maxAmmo = 8;
    this.baseDamage = 30;
  }
}