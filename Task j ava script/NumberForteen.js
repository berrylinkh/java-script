

const scanned = require ('prompt-sync')();
const words = scanned ('Enter word: ');
let wordLength = words.length;

    if (wordLength < 5){
    console.log ('short');
    
}
    if (wordLength >= 5 && wordLength <=10) {
    console.log ('medium')
    
}
    if (wordLength > 10) {
    console.log ('long')
    
}
