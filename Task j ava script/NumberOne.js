

const scanned = require("prompt-sync")();
const grade = scanned("Enter your score: ");

    if (grade >= 90) {
        console.log ("Your grade is A ");
    }
    else if (grade >= 80 && grade <= 89) {
        console.log("Your grade is B ");
    }
    else if(grade >= 70 && grade <= 79) {
         console.log("Your grade is C ");
    }
     else if(grade >= 60 && grade <= 69) {
         console.log("Your grade is D ");
    }
     else if(grade < 60 ) {
         console.log("Your grade is F ");
    }
