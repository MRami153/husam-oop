import { DiabloHero } from "./DiabloHero"

export class MageHero extends DiabloHero {

    shortRangeSpell(target: DiabloHero) {
        const SPELL_RANGE: number = 20
        const SPELL_COST: number = 160
        const SPELL_DAMAGE: number = 2 * this.attack
        
        if (this.mana < SPELL_COST) {
            console.log('Not enough mana')
            return
        }
        if (!this.isWithinRange(target, SPELL_RANGE)) {
            console.log('Target out of range')
            return
        }

        /* Performing the attack */
        const newHealth = target.getHealth() - 0.75 * SPELL_DAMAGE
        target.setHealth(newHealth) //includes a death check

        const armorHit = 0.25 * SPELL_DAMAGE
        this.heroAttack(target, armorHit) // includes a death check
    }

    longRangeSpell(target: DiabloHero) {
        const SPELL_RANGE: number = 100
        const SPELL_COST: number = 100
        const SPELL_DAMAGE: number = 1.5 * this.attack

        if (this.mana < SPELL_COST) {
            console.log('Not enough mana')
            return
        }
        if (!this.isWithinRange(target, SPELL_RANGE)) {
            console.log('Target out of range')
            return
        }

        /* Performing the attack */
        const newHealth = target.getHealth() - 0.5 * SPELL_DAMAGE
        target.setHealth(newHealth) //includes a death check

        const armorHit = 0.5 * SPELL_DAMAGE
        this.heroAttack(target, armorHit) // includes a death check
    }

    mageMoveTowards(target: DiabloHero) {
        this.moveTowards(target, 3)
    }

    mageMoveAway(target: DiabloHero) {
        this.moveAway(target, 3)
    }
}