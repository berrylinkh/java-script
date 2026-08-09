


    const Scanned = require ('prompt-sync')();
    const gradeLetter = Scanned ('Enter a grade letter: ');
    
    
 

    if (gradeLetter === 'A' || gradeLetter === 'B' || gradeLetter === 'C' || gradeLetter === 'D') {
    console.log("PASS")
}
   else if (gradeLetter === 'F'){
    console.log("FAIL");
 }
    
    else if (gradeLetter === 'a' || gradeLetter === 'b' || gradeLetter === 'c' || gradeLetter === 'd') {
    console.log("PASS")
}
   else if (gradeLetter === 'f'){
    console.log("FAIL");
 }
    else {
    console.log ('Invalid')
}
    
    
