




    const Scanned = require ('prompt-sync')();
    const number = Scanned ('Enter number to check it divisble number: ');
    

        if (isNaN(number)) {
        console.log ('Invalid')
        }

        else {
            
             if (number % 3 == 0  && number % 5 != 0 ) {
        console.log("Divisble by 3")
    }
            else if (number % 5 == 0  && number % 3 != 0 )  {
        console.log("Divisible by 5")
    }
            else if (number % 3 == 0  && number % 5 == 0 ) {
                console.log ("Divisible by Both")    
    }
          else  {
        console.log("NOt Divisible")
    }
}
            
        
       
