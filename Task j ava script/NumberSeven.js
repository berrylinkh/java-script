



const Scanned = require ('prompt-sync')();
const numberOne = Scanned ('Enter first number: ');
const numberTwo = Scanned ('Enter second number: ');
const numberThree = Scanned ('Enter third number: ');

let multiply = numberOne * numberTwo * numberThree;

    if (multiply >= 0) {
    console.log("+")
}
   else {
    console.log("-");
 }

