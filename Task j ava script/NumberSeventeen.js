



const scanned = require ('prompt-sync')();
const digit = scanned ('Enter any digit: ');
let digitLength = digit.length;

    if (digitLength == 1 ){
    console.log ('single - digit');
    
}
    else if (digitLength == 2) {
    console.log ('double-digit')
    
}
    else if (digitLength ==3) {
    console.log ('triple-digit')
    
}
    else if (digitLength >3) {
    console.log ('larger')
    
}
