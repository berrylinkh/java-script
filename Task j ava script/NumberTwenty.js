


    const Scanned = require ('prompt-sync')();
    const  hourlyWorked= Scanned ('Enter a number: ');
    const hourlyRate = Scanned ('Enter another number: ');

    const totalPay= hourlyWorked * hourlyRate;
    const overtimeTotalPay= (40 *hourlyRate) + (hourlyWorked - 40) * (hourlyRate *1.5);
    
    
 

   if (hourlyWorked <= 40) {
    console.log ("The total pay  is = ",totalPay);
}
    else if (hourlyWorked > 40) {
    console.log("The total pay with overtime is = ",overtimeTotalPay);
}
 
    
