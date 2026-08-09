





    const Scanned = require ('prompt-sync')();
    const accountBalance = Scanned ('Enter an your current account balance: ');
    

        if (isNaN(accountBalance)) {
        console.log ('Invalid')
        }

        else {
            
             if (accountBalance < 100) {
        console.log("Low")
    }
            else if (accountBalance >= 100 && accountBalance <= 1000) {
        console.log("Medium")
    }
            else if (accountBalance > 1000){
                console.log ('High')    
            }
        }
        
        
       
