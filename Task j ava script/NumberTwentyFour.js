



    const scanned = require ('prompt-sync')();
    const height  = scanned('Enter your height in cm : ');
    const weight = scanned('Enter your weight in kg: ');
    
    let heightBeConvertedToMeter = height / 100;
    let bmi = weight / (heightBeConvertedToMeter * heightBeConvertedToMeter) ;


      if (bmi <= 18.4) {
        console.log ("Underweight");
    } 
       else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log ("Normal weight");
    }
       else if (bmi >= 25.0 && bmi <= 29.9) {
        console.log ("Overweight");
    }
       else if (bmi >= 30.0) {
        console.log ("Obese");
    }



