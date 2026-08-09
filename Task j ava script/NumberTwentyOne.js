


    const scanned = require ('prompt-sync')();
    const  number= Number(scanned ('Enter a number for division: '));
    let sum = 0;

    for (let count =1; count < number; count ++) {
        if (number % count ==0){
            sum =sum + count;
    }
}

    if (sum == number){
    console.log ('Perfect');
    }
     else if (sum > number){
    console.log ('Abundant');
    }
    else if (sum < number){
    console.log ('Deficiency'); 
    }
    else if (isNaN(number)){
    console.log ('invalid'); 
    }

