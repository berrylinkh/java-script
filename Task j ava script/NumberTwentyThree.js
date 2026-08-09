

    const scanned = require ('prompt-sync')();
    const studentAttendancePercentage = scanned('Enter number of time present: ');
     const averageScore = scanned('Enter your averge score: ');

      if (studentAttendancePercentage >= 75 && averageScore >= 75 ) {
        console.log ("Eligible for exam")
    } 
       else {
        console.log ("Not Eligible for exam")
    }

