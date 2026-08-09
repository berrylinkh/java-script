

/*const scanned = require ('prompt-sync')();
const number = scanned('Enter number to print it prime number: ');
let counter= 0;

    for (let count=1; count<=number; count++) {
        counter=0;
            for (let index= 1; index <=count; index++) {
                if (count % index ==0){
                    counter ++;
        }
     }
     if (counter == 2) {
        console.log(count)
    }

}*/

const scanned = require ('prompt-sync')();
const number = scanned('Enter number to check if it is a prime number: ');

    let counter =0;

        for(let count = 1; count <= number; count++) {
            if (number % count ==0) {
            counter ++;
    }
}
        if (counter == 2) {
        console.log ("it is prime")
    } 
       else if (counter != 2){
        console.log ("Composite")
    }
        else if (number ==0 && number ==1)
        console.log("Composite")

