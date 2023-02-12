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
exports.MageHero = void 0;
var DiabloHero_1 = require("./DiabloHero");
var MageHero = /** @class */ (function (_super) {
    __extends(MageHero, _super);
    function MageHero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MageHero.prototype.shortRangeSpell = function (target) {
        var SPELL_RANGE = 20;
        var SPELL_COST = 160;
        var SPELL_DAMAGE = 2 * this.attack;
        if (this.mana < SPELL_COST) {
            console.log('Not enough mana');
            return;
        }
        if (!this.isWithinRange(target, SPELL_RANGE)) {
            console.log('Target out of range');
            return;
        }
        /* Performing the attack */
        var newHealth = target.getHealth() - 0.75 * SPELL_DAMAGE;
        target.setHealth(newHealth); //includes a death check
        var armorHit = 0.25 * SPELL_DAMAGE;
        this.heroAttack(target, armorHit); // includes a death check
    };
    MageHero.prototype.longRangeSpell = function (target) {
        var SPELL_RANGE = 100;
        var SPELL_COST = 100;
        var SPELL_DAMAGE = 1.5 * this.attack;
        if (this.mana < SPELL_COST) {
            console.log('Not enough mana');
            return;
        }
        if (!this.isWithinRange(target, SPELL_RANGE)) {
            console.log('Target out of range');
            return;
        }
        /* Performing the attack */
        var newHealth = target.getHealth() - 0.5 * SPELL_DAMAGE;
        target.setHealth(newHealth); //includes a death check
        var armorHit = 0.5 * SPELL_DAMAGE;
        this.heroAttack(target, armorHit); // includes a death check
    };
    MageHero.prototype.mageMoveTowards = function (target) {
        this.moveTowards(target, 3);
    };
    MageHero.prototype.mageMoveAway = function (target) {
        this.moveAway(target, 3);
    };
    return MageHero;
}(DiabloHero_1.DiabloHero));
exports.MageHero = MageHero;
