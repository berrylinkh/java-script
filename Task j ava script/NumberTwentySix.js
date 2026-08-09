



    const Scanned = require ('prompt-sync')();
    const number = Scanned ('Enter an integer: ');
    

        if (isNaN(number)) {
        console.log ('Invalid')
        }

        else {
            
             if (number == 0) {
        console.log("Positive Zero")
    }
            else if (number > 0 && number % 2 === 0) {
        console.log("Positive Even")
    }
            else if (number < 0 && number % 2 ===0){
                console.log ('Negative Even')    
            }
          else if (number > 0 && number % 2 !== 0) {
        console.log("Positive Odd")
    }
            else if (number < 0 && number % 2 !==0){
                console.log ('Negative Odd')    
            }
        }
        
        
       
