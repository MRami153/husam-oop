import { DiabloHero } from "./DiabloHero";

export const WARRIOR_ATTACK_RANGE: number = 5

export class WarriorHero extends DiabloHero {

    swordAttack(target: DiabloHero) {
        const SPELL_RANGE: number = WARRIOR_ATTACK_RANGE
        const SPELL_COST: number = 30
        const SPELL_DAMAGE: number = 1 * this.attack

        if (this.mana - SPELL_COST < 0) {
            console.log('Not enough mana')
            return
        }

        if (!this.isWithinRange(target, SPELL_RANGE)) return

        this.heroAttack(target, SPELL_DAMAGE)
    }

    swordSwing(target: DiabloHero) {
        const SPELL_RANGE: number = 2 * WARRIOR_ATTACK_RANGE
        const SPELL_COST: number = 30
        const SPELL_DAMAGE: number = 0.8 * this.attack

        if (this.mana - SPELL_COST < 0) {
            console.log('Not enough mana')
            return
        }

        if (!this.isWithinRange(target, SPELL_RANGE)) return
        this.heroAttack(target, SPELL_DAMAGE)
    }

    swordKebab(target: DiabloHero) {
        const SPELL_RANGE: number = WARRIOR_ATTACK_RANGE - 2
        const SPELL_COST: number = 75
        const SPELL_DAMAGE: number = 2.5 * this.attack

        if (this.mana - SPELL_COST < 0) {
            console.log('Not enough mana')
            return
        }

        if (!this.isWithinRange(target, SPELL_RANGE)) return
        this.heroAttack(target, SPELL_DAMAGE)
    }

    warriorMoveTowards(target: DiabloHero) {
        this.moveTowards(target, 7)
    }

    warriorMoveAway(target: DiabloHero) {
        this.moveAway(target, 7)
    }
}