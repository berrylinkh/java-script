/*var;
let;
const;*/


/*let number = 2;
console.log ("first number: ", number);

 

number = 4;
console.log ("second number: ", number);*/


/*
const number = 2;
console.log ("first number: ", number);

number = 4;
console.log ("second number: ", number);*/


/*let number;
console.log ("first number: ", number);

 

number = 4;
console.log ("second number: ", number);*/

//
//console.log ("NaN" == NaN);
//console.log ("NaN" === NaN);

/*const scanner = require ("prompt-sync")();
const age = scanner ('Enter your age: ');

if (age > 18 ) {
    console.log('celebrate....Happy birthday Honour');
}
    else if (age <=0) {
    console.log('Oga, get sense and type a positive number')
    
} 
    else{ 
    console.log('Do nothing');

}*/

const scanner = require("prompt-sync")();
const day = scanner("enter a 1-7 fordays of the week: ");

    switch (day){
    case "1": console.log("Sunday");break;
    case "2": console.log("Monday");break;
    case "3": console.log("Tuesday");break;
    case "4": console.log("Wednesday");break;
    case "5": console.log("Thursday");break;
    case "6": console.log("Friday");break;
    case "7": console.log("Saturday");break; 
    default: console.log("Invalid input");break; 
    
}
