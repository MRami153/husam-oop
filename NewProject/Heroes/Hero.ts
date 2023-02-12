import { PLATFORM_SIZE } from ".."

export class Hero {
	stamina: number
	position: number
	active: boolean = true
	stepSize: number

	constructor(staminaPoints: number, position: number, stepSize: number) {
		this.stamina = staminaPoints
		this.position = position
		this.stepSize = stepSize
	}

	move(direction: number) {
		this.position += this.stepSize * direction
		if (this.position > PLATFORM_SIZE || this.position < 1) {
			this.active = false
			console.log('HAHA')
		}		
	}
}