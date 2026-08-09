



    const scanned = require ('prompt-sync')();
    const sideOneOfTriangle  = scanned('Enter first side of the right triange number: ');
    const sideTwoOfTriangle = scanned('Enter second side of the right triange number: ');
    const sideThreeOfTriangle = scanned('Enter third side of the right triange number: ');

        let sideOneOfRightTriangle = sideOneOfTriangle * sideOneOfTriangle;
        let sideTwoOfRightTriangle = sideTwoOfTriangle * sideTwoOfTriangle;
        let sideThreeOfRightTriangle = sideThreeOfTriangle * sideThreeOfTriangle;

    

            if (isNaN(sideOneOfTriangle) || isNaN(sideTwoOfTriangle) || isNaN(sideThreeOfTriangle)) {

            console.log ("Invalid input")
    }  
            else if (sideOneOfTriangle >= sideThreeOfTriangle  || sideTwoOfTriangle >= sideThreeOfTriangle) {
            console.log ("Side three must be the longest side.")
    }        
            else if ( sideOneOfRightTriangle + sideTwoOfRightTriangle === sideThreeOfRightTriangle || sideTwoOfRightTriangle +   sideOneOfRightTriangle === sideThreeOfRightTriangle ) {
        console.log ("Right Triangle");
    } 
            else  {
        console.log ("Not a Right Triangle");
    }



