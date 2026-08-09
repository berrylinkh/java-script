
    const Scanned = require ('prompt-sync')();
    const firstNumber = Scanned ('Enter a number: ');
    const secondNumber = Scanned ('Enter another number: ');
    
 

   if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log ('Invalid')
}
    else if (firstNumber > secondNumber) {
    console.log("Increasing")
}
   else if (firstNumber < secondNumber){
    console.log("Decreasing");
 }
    else if (firstNumber == secondNumber){
    console.log("Equal");
 } 
    
