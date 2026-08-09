
const Scanned = require ('prompt-sync')();
const year = Scanned ('Enter year: ');

    if (year % 4 === 0 && year % 100 !==0 && year % 400 ===0){
    console.log("it is a not leap year")
}
   else {
    console.log("it is a leap year")
 
}
