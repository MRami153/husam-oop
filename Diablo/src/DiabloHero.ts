import { MAX_POSITION, MIN_POSITION } from ".."

export class DiabloHero {
    position: number

    attack: number = 100 /* set to 100, spells user percentage */

    private health: number 
    maxHealth: number /* 200 to 300 */

    mana: number 
    maxMana: number /* 100 to 200 */

    armor: number = 100 /* 150 to 250 */
    dead: boolean  = false

    constructor(maxHealth: number, maxMana: number, position: number) {
        if (maxHealth < 200) {
            this.maxHealth = 200
        } else {
            this.maxHealth = maxHealth
        }
        this.position = position
        this.maxMana = maxMana
        this.health = maxHealth
        this.mana = maxMana
    }

    /**
     * 
     * @param target parameter passed to the function (Target to be attacked)
     */
    heroAttack(target: DiabloHero, damage: number) {
        // this. refers to the object calling the function (Attacker) i.e. myHero.basicAttack(badGuy)
        const armorDiff = target.armor - damage
        if (armorDiff < 0) {
            const newHealth = target.health + armorDiff
            this.setHealth(newHealth)
            target.armor = 0
            return
        }
        target.armor = armorDiff
        
    }

    basicAttack(target: DiabloHero) {
        const BASIC_ATTACK_DAMAGE: number = 5
        this.heroAttack(target, BASIC_ATTACK_DAMAGE)
    }

    selfHeal() {
        // Convention hard coded constants
        const MANA_COST: number = 10
        const HEALING_AMOUNT: number = 20
        if (this.mana < 10) {
            console.log('Not enough mana for Self Heal')
            return
        }

        const healthDiff = this.health + HEALING_AMOUNT
        if (healthDiff >= this.maxHealth) {
            console.log('Go take a nap')
            return
        }
        this.health += HEALING_AMOUNT
        this.mana -= MANA_COST
    }

    setHealth(healthValue: number) {
        if (healthValue <= 0) {
            this.health = 0
            this.dead = true
            console.log('One of them died')
            return
        }
        this.health = healthValue
    }

    getHealth(): number {
        return this.health
    }

    printHealthString(): void {
        console.log(`The hero's health is ${this.health}`)
    }

    isWithinRange(target: DiabloHero, range: number): boolean {
        return Math.abs(this.position - target.position) <= range
    }

    setPosition(newPosition: number) {
        if (newPosition > MAX_POSITION) this.position = MAX_POSITION
        if (newPosition < MIN_POSITION) this.position = MIN_POSITION
        this.position = newPosition
    }

    moveTowards(target: DiabloHero, steps: number) {
        const positionDiff = this.position - target.position
        if (positionDiff == 0) return

        if (positionDiff < 0) {
            this.setPosition(this.position + steps)  
        } else {
            this.setPosition(this.position - steps)  
        }   
    }

    moveAway(target: DiabloHero, steps: number) {
        const positionDiff = this.position - target.position
    
        if (positionDiff == 0) {
            if (this.position < (MAX_POSITION - MIN_POSITION)/2) {
                this.setPosition(this.position + steps)
            } else {
                this.setPosition(this.position - steps)
            }
            return
        }
        if (positionDiff < 0) {
            this.setPosition(this.position - steps) 
            return 
        } 
        
        this.setPosition(this.position + steps)  
         
    }

    manaRegen(manaAmount: number) {
        if (this.mana == this.maxMana) return

        this.mana += manaAmount

        if (this.mana > this.maxMana) 
            this.mana = this.maxMana
        
    }

}
