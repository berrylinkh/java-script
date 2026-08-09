


    const Scanned = require ('prompt-sync')();
    const createUsername = Scanned ('Create your username: ');
    const createPassword = Scanned ('Create your password: ');

    let input =1;
    let loginMaximumAttempt =3;

        while (input <= loginMaximumAttempt) {
            const username = Scanned ('Enter your username: ');
            const password = Scanned ('Enter your password: ');
            input ++;
    
              
            if (username === createUsername && password === createPassword) {
                        console.log ('Allowed');
                        break;
            }else if (input === 2){    
                    console.log ('Warning');
            }else if (input === 3) {
                    console.log ('Locked');
                    break;
            }   
} 
    

       
               
