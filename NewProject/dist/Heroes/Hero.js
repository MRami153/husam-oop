"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const __1 = require("..");
class Hero {
    stamina;
    position;
    active = true;
    stepSize;
    constructor(staminaPoints, position, stepSize) {
        this.stamina = staminaPoints;
        this.position = position;
        this.stepSize = stepSize;
    }
    move(direction) {
        this.position += this.stepSize * direction;
        if (this.position > __1.PLATFORM_SIZE || this.position < 1) {
            this.active = false;
            console.log('HAHA');
        }
    }
}
exports.Hero = Hero;
