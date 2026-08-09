
    const Scanned = require ('prompt-sync')();
    const age = Scanned ('Enter the age to know your status: ');


 

   if (age == 0  && age <=12) {
    console.log("Child")
}
   else if (age > 12 && age <= 19){
    console.log("Teen");
 }
    else if (age > 19 && age <= 59){
    console.log("Adult");
 }
    else if (age >= 60){
    console.log("Senior");
 }
