"use strict";
exports.__esModule = true;
exports.DiabloHero = void 0;
var __1 = require("..");
var DiabloHero = /** @class */ (function () {
    function DiabloHero(maxHealth, maxMana, position) {
        this.attack = 100; /* set to 100, spells user percentage */
        this.armor = 100; /* 150 to 250 */
        this.dead = false;
        this.position = position;
        this.maxHealth = 200;
        this.setHealth(maxHealth);
        this.maxMana = maxMana;
        this.health = maxHealth;
        this.mana = maxMana;
    }
    /**
     *
     * @param target parameter passed to the function (Target to be attacked)
     */
    DiabloHero.prototype.heroAttack = function (target, damage) {
        // this. refers to the object calling the function (Attacker) i.e. myHero.basicAttack(badGuy)
        var armorDiff = target.armor - damage;
        if (armorDiff < 0) {
            var newHealth = target.health + armorDiff;
            this.setHealth(newHealth);
            target.armor = 0;
            return;
        }
        target.armor = armorDiff;
    };
    DiabloHero.prototype.basicAttack = function (target) {
        var BASIC_ATTACK_DAMAGE = 5;
        this.heroAttack(target, BASIC_ATTACK_DAMAGE);
    };
    DiabloHero.prototype.selfHeal = function () {
        // Convention hard coded constants
        var MANA_COST = 10;
        var HEALING_AMOUNT = 20;
        if (this.mana < 10) {
            console.log('Not enough mana for Self Heal');
            return;
        }
        var healthDiff = this.health + HEALING_AMOUNT;
        if (healthDiff >= this.maxHealth) {
            console.log('Go take a nap');
            return;
        }
        this.health += HEALING_AMOUNT;
        this.mana -= MANA_COST;
    };
    DiabloHero.prototype.setHealth = function (healthValue) {
        if (healthValue <= 0) {
            this.health = 0;
            this.dead = true;
            console.log('One of them died');
            return;
        }
        this.health = healthValue;
    };
    DiabloHero.prototype.getHealth = function () {
        return this.health;
    };
    DiabloHero.prototype.printHealthString = function () {
        console.log("The hero's health is ".concat(this.health));
    };
    DiabloHero.prototype.isWithinRange = function (target, range) {
        return Math.abs(this.position - target.position) <= range;
    };
    DiabloHero.prototype.setPosition = function (newPosition) {
        if (newPosition > __1.MAX_POSITION)
            this.position = __1.MAX_POSITION;
        if (newPosition < __1.MIN_POSITION)
            this.position = __1.MIN_POSITION;
        this.position = newPosition;
    };
    DiabloHero.prototype.moveTowards = function (target, steps) {
        var positionDiff = this.position - target.position;
        if (positionDiff == 0)
            return;
        if (positionDiff < 0) {
            this.setPosition(this.position + steps);
        }
        else {
            this.setPosition(this.position - steps);
        }
    };
    DiabloHero.prototype.moveAway = function (target, steps) {
        var positionDiff = this.position - target.position;
        if (positionDiff == 0) {
            if (this.position < (__1.MAX_POSITION - __1.MIN_POSITION) / 2) {
                this.setPosition(this.position + steps);
            }
            else {
                this.setPosition(this.position - steps);
            }
            return;
        }
        if (positionDiff < 0) {
            this.setPosition(this.position - steps);
            return;
        }
        this.setPosition(this.position + steps);
    };
    DiabloHero.prototype.manaRegen = function (manaAmount) {
        if (this.mana == this.maxMana)
            return;
        this.mana += manaAmount;
        if (this.mana > this.maxMana)
            this.mana = this.maxMana;
    };
    return DiabloHero;
}());
exports.DiabloHero = DiabloHero;
