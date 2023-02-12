import { MageHero } from "./src/MageHero"
import { WarriorHero } from "./src/WarriorHero"
import * as readline from 'readline-sync'
import { DiabloHero } from "./src/DiabloHero"


const MAGE_MANA_REGEN: number = 7
const WARRIOR_MANA_REGEN: number = 5
export const MAX_POSITION = 45
export const MIN_POSITION = 0

let platform: string[] = []
const mageHero = new MageHero(200, 200, 15)
const warriorHero = new WarriorHero(300, 100, 25)



printPlatform()
while (!mageHero.dead && !warriorHero.dead) {
    warriorTurn()
    printPlatform()
    mageTurn()
    printPlatform()
}



function mageTurn() {
    const mageTurn = readline.question('Mage turn: ')
    if (mageTurn == 'move towards') {
        mageHero.mageMoveTowards(warriorHero)
        return
    }
    if (mageTurn == 'move away') {
        mageHero.mageMoveAway(warriorHero)
        return
    }
    if (mageTurn == 'short range') {
        mageHero.shortRangeSpell(warriorHero)
        return
    }
    if (mageTurn == 'long range') {
        mageHero.longRangeSpell(warriorHero)
        return
    }
    if (mageTurn == 'basic attack') {
        mageHero.basicAttack(warriorHero)
        return
    }
}

function warriorTurn() {
    const warriorTurn = readline.question('Warrior turn: ')
    if (warriorTurn == 'move towards') {
        warriorHero.warriorMoveTowards(mageHero)
        return
    }
    if (warriorTurn == 'move away') {
        warriorHero.warriorMoveAway(mageHero)
        return
    }
    if (warriorTurn == 'sword attack') {
        warriorHero.swordAttack(mageHero)
        return
    }
    if (warriorTurn == 'sword kebab') {
        warriorHero.swordKebab(mageHero)
        return
    }
    if (warriorTurn == 'sword swing') {
        warriorHero.swordSwing(mageHero)
        return
    }
    if (warriorTurn == 'basic attack') {
        warriorHero.basicAttack(mageHero)
        return
    }
}

function printPlatform() {
    for (let i = MIN_POSITION; i <= MAX_POSITION; i++) {
        platform[i] = '-'
    }
    if (mageHero.position == warriorHero.position) platform[mageHero.position] = 'X'
    else {
        platform[mageHero.position] = 'M'
        platform[warriorHero.position] = 'W'
    }
    let platformString: string = ''

    for (const cell of platform) {
        platformString += cell
    }
    const deadHero = new DiabloHero(-50, 50, 4)


    console.log(deadHero.maxHealth, deadHero.dead)
}