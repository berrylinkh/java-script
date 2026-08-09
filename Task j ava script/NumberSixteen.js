
const scanned = require ('prompt-sync')();
const month = scanned ('Enter 1-12 for the month of the year: ');

switch (month) {

    case"1": console.log("12, 1, 2 --> winter"); break;
    case"2": console.log("12, 1, 2 --> winter"); break;
    case"3": console.log("3, 4, 5 --> spring"); break;
    case"4": console.log("3, 4, 5 --> spring"); break;
    case"5": console.log("3, 4, 5 --> spring"); break;
    case"6": console.log("6, 7, 8 --> summer"); break;
    case"7": console.log("6, 7, 8 --> summer"); break;
    case"8": console.log("6, 7, 8 --> summer"); break;
    case"9": console.log("9, 10,11 --> autum"); break;
    case"10": console.log("9, 10,11 --> autum"); break;
    case"11": console.log("9, 10,11 --> autum"); break;
    case"12": console.log("12, 1, 2 --> winter"); break;
    default : console.log("invalid"); break;


}
