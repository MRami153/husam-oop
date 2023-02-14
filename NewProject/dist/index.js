"use strict";
// -w------------------------------------------------m--
// --s------------------------------------------------f-
// --------t------------------<|-----------------------r--
// ---------z---------------------------------------g---
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLATFORM_SIZE = void 0;
const Hero_1 = require("./Heroes/Hero");
exports.PLATFORM_SIZE = 50;
let platform = '';
for (let spot = 1; spot <= exports.PLATFORM_SIZE; spot++) {
    platform += '-';
}
const runner = new Hero_1.Hero(7, 0, 3);
const walker = new Hero_1.Hero(10, 0, 2);
runner.position = getRandomArbitrary(1, 3);
walker.position = getRandomArbitrary(47, 51);
platform = replaceAt(platform, runner.position, 'R');
platform = replaceAt(platform, walker.position, 'W');
console.log(platform);
function getRandomArbitrary(min, max) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
function replaceAt(str, index, replacement) {
    if (replacement.length > 1) {
        console.log('Only one character to replace');
        return;
    }
    if (index >= str.length) {
        return str.valueOf();
    }
    return str.substring(0, index) + replacement + str.substring(index + 1);
}
