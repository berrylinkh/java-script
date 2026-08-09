



const Scanned = require ('prompt-sync')();
const numberOne = Scanned ('Enter first number: ');
const numberTwo = Scanned ('Enter second number: ');
const numberThree = Scanned ('Enter third number: ');

let sum = numberOne + numberTwo + numberThree;

    if (sum == 0) {
    console.log("Zero")
}
   else if (sum > 0){
    console.log("positive");
 }
    else {
    console.log("negative");
 }
