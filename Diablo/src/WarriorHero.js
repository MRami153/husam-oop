"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.WarriorHero = exports.WARRIOR_ATTACK_RANGE = void 0;
var DiabloHero_1 = require("./DiabloHero");
exports.WARRIOR_ATTACK_RANGE = 5;
var WarriorHero = /** @class */ (function (_super) {
    __extends(WarriorHero, _super);
    function WarriorHero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WarriorHero.prototype.swordAttack = function (target) {
        var SPELL_RANGE = exports.WARRIOR_ATTACK_RANGE;
        var SPELL_COST = 30;
        var SPELL_DAMAGE = 1 * this.attack;
        if (this.mana - SPELL_COST < 0) {
            console.log('Not enough mana');
            return;
        }
        if (!this.isWithinRange(target, SPELL_RANGE))
            return;
        this.heroAttack(target, SPELL_DAMAGE);
    };
    WarriorHero.prototype.swordSwing = function (target) {
        var SPELL_RANGE = 2 * exports.WARRIOR_ATTACK_RANGE;
        var SPELL_COST = 30;
        var SPELL_DAMAGE = 0.8 * this.attack;
        if (this.mana - SPELL_COST < 0) {
            console.log('Not enough mana');
            return;
        }
        if (!this.isWithinRange(target, SPELL_RANGE))
            return;
        this.heroAttack(target, SPELL_DAMAGE);
    };
    WarriorHero.prototype.swordKebab = function (target) {
        var SPELL_RANGE = exports.WARRIOR_ATTACK_RANGE - 2;
        var SPELL_COST = 75;
        var SPELL_DAMAGE = 2.5 * this.attack;
        if (this.mana - SPELL_COST < 0) {
            console.log('Not enough mana');
            return;
        }
        if (!this.isWithinRange(target, SPELL_RANGE))
            return;
        this.heroAttack(target, SPELL_DAMAGE);
    };
    WarriorHero.prototype.warriorMoveTowards = function (target) {
        this.moveTowards(target, 7);
    };
    WarriorHero.prototype.warriorMoveAway = function (target) {
        this.moveAway(target, 7);
    };
    return WarriorHero;
}(DiabloHero_1.DiabloHero));
exports.WarriorHero = WarriorHero;
