const DIMENSION = 6;
const SQUARE_DIMENSION = 3;
const grid = [
    new Array(DIMENSION),
    new Array(DIMENSION),
    new Array(DIMENSION),
    new Array(DIMENSION),
    new Array(DIMENSION),
    new Array(DIMENSION)
]; // Can we declare it differently?
let count = 0;
let countString = '';
for (let row = 0; row < DIMENSION; row++) {
    for (let col = 0; col < DIMENSION; col++) {
        if (count < 9) {
            countString = '0' + ++count;
        }
        else
            countString = (++count).toString();
        grid[row][col] = countString;
        countString = '';
    }
}
console.log(+grid[0][0] + +grid[0][1]);
