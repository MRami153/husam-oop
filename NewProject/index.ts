// -w------------------------------------------------m--
// --s------------------------------------------------f-
// --------t------------------<|-----------------------r--
// ---------z---------------------------------------g---

import { Hero } from "./Heroes/Hero"

export const PLATFORM_SIZE = 50
let platform: string = ''
for (let spot = 1; spot <= PLATFORM_SIZE; spot++) {
	platform += '-'
}
const runner: Hero = new Hero (7, 0, 3)
const walker: Hero = new Hero (10,0,2)
runner.position = getRandomArbitrary(1, 3)
walker.position = getRandomArbitrary(47, 51)
platform = replaceAt (platform, runner.position, 'R')
platform = replaceAt (platform, walker.position, 'W')
console.log(platform)






function getRandomArbitrary(min: number, max: number): number {
	const num = Math.random() * (max - min) + min
	return Math.floor(num)
}

function replaceAt (str: string, index: number, replacement: string) {
	if (replacement.length > 1) {
	  console.log('Only one character to replace')
	  return
	}
	if (index >= str.length) {
	  return str.valueOf()
	}
	return str.substring(0, index) + replacement + str.substring(index + 1)
}