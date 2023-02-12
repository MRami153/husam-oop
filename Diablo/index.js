"use strict";
exports.__esModule = true;
exports.MIN_POSITION = exports.MAX_POSITION = void 0;
var MageHero_1 = require("./src/MageHero");
var WarriorHero_1 = require("./src/WarriorHero");
var readline = require("readline-sync");
var DiabloHero_1 = require("./src/DiabloHero");
var MAGE_MANA_REGEN = 7;
var WARRIOR_MANA_REGEN = 5;
exports.MAX_POSITION = 45;
exports.MIN_POSITION = 0;
var platform = [];
var mageHero = new MageHero_1.MageHero(200, 200, 15);
var warriorHero = new WarriorHero_1.WarriorHero(300, 100, 25);
printPlatform();
while (!mageHero.dead && !warriorHero.dead) {
    warriorTurn();
    printPlatform();
    mageTurn();
    printPlatform();
}
function mageTurn() {
    var mageTurn = readline.question('Mage turn: ');
    if (mageTurn == 'move towards') {
        mageHero.mageMoveTowards(warriorHero);
        return;
    }
    if (mageTurn == 'move away') {
        mageHero.mageMoveAway(warriorHero);
        return;
    }
    if (mageTurn == 'short range') {
        mageHero.shortRangeSpell(warriorHero);
        return;
    }
    if (mageTurn == 'long range') {
        mageHero.longRangeSpell(warriorHero);
        return;
    }
    if (mageTurn == 'basic attack') {
        mageHero.basicAttack(warriorHero);
        return;
    }
}
function warriorTurn() {
    var warriorTurn = readline.question('Warrior turn: ');
    if (warriorTurn == 'move towards') {
        warriorHero.warriorMoveTowards(mageHero);
        return;
    }
    if (warriorTurn == 'move away') {
        warriorHero.warriorMoveAway(mageHero);
        return;
    }
    if (warriorTurn == 'sword attack') {
        warriorHero.swordAttack(mageHero);
        return;
    }
    if (warriorTurn == 'sword kebab') {
        warriorHero.swordKebab(mageHero);
        return;
    }
    if (warriorTurn == 'sword swing') {
        warriorHero.swordSwing(mageHero);
        return;
    }
    if (warriorTurn == 'basic attack') {
        warriorHero.basicAttack(mageHero);
        return;
    }
}
function printPlatform() {
    for (var i = exports.MIN_POSITION; i <= exports.MAX_POSITION; i++) {
        platform[i] = '-';
    }
    if (mageHero.position == warriorHero.position)
        platform[mageHero.position] = 'X';
    else {
        platform[mageHero.position] = 'M';
        platform[warriorHero.position] = 'W';
    }
    var platformString = '';
    for (var _i = 0, platform_1 = platform; _i < platform_1.length; _i++) {
        var cell = platform_1[_i];
        platformString += cell;
    }
    var deadHero = new DiabloHero_1.DiabloHero(-50, 50, 4);
    console.log(deadHero.maxHealth, deadHero.dead);
}
