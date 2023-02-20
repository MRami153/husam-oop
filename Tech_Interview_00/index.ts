/*Given the array below, write a program the prints the diagonal 
such that the output is 000001*/
/*const binaryArray: string[] = [
    '912345',
    '198912',
    '219456',
    '321923',
    '432199',
    '543219',
    '654321'
]

const num: number = 5
console.log (binaryArray)
let myString: string = ''
let strIndex: number = 0
let arrIndex: number = num
if (num < binaryArray.length ) {
	while (strIndex < binaryArray[0].length && arrIndex < binaryArray.length) {
		myString += (binaryArray[arrIndex].at(strIndex))
		strIndex++
		arrIndex++
	}
	if (myString.length < binaryArray[0].length) {
		// while (myString.length < binaryArray[0].length) {
		// 	myString += '0'
		// }
		myString = (+myString * Math.pow(10, binaryArray[0].length - myString.length)).toString()
		// const pow: number = binaryArray[0].length - myString.length
		// const result: number = myNum * Math.pow(10, pow)
		// myString = result.toString()
	}
	console.log(myString)
	binaryArray.push(myString)
}
else {
	console.log('number too high!')
}

console.log(binaryArray)*/

// Casting
import { Animal } from "./Animal";
import { Reptilian } from "./Reptilian";

const reptile: Animal = new Reptilian()

const castedRept: Reptilian = <Reptilian> reptile