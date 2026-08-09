


    const Scanned = require ('prompt-sync')();
    const number = Scanned ('Enter an integer: ');
    

   if (isNaN(number)) {
    console.log ('Invalid')
}

    else if (number % 2 == 0 ) {
    console.log("Even")
}
   else if (number % 2 != 0){
    console.log("odd");
 }
   
