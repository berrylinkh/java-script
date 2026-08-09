

const Scanned = require ('prompt-sync')();
const firstNumber = Scanned ('Enter number one: ');
const secondNumber = Scanned ('Enter number two: ');
const thirdNumber = Scanned ('Enter number three: ');

    if (firstNumber > secondNumber && firstNumber > thirdNumber){
    console.log("Largest number is : ",firstNumber)
}
   else if (secondNumber > firstNumber && secondNumber > thirdNumber){
    console.log("Largest number is : ",secondNumber)
}
 
    else if (thirdNumber > firstNumber && thirdNumber > secondNumber){
    console.log("Largest number is : ",thirdNumber)
 }

