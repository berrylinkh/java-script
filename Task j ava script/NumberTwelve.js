


    const Scanned = require ('prompt-sync')();
    const optionOne = Scanned ('Enter true / false: ');
    const optionTwo = Scanned ('Enter true/false: ');
    const optionThree= Scanned ('Enter true/false: ');


 

   if (optionOne === optionTwo  && optionOne === optionThree) {
    console.log("True")
}
   else if (optionOne !== optionTwo  && optionOne === optionThree){
    console.log("True");
 }
    else if (optionOne === optionTwo  && optionOne !== optionThree){
    console.log("True");
 }
    else if (optionTwo === optionOne  && optionTwo === optionThree){
    console.log("True");
 }
    else if (optionTwo !== optionOne  && optionTwo === optionThree){
    console.log("True");
 }
    else if (optionTwo === optionOne  && optionTwo !== optionThree){
    console.log("True");
 }
    else if (optionThree === optionOne  && optionThree === optionOne){
    console.log("True");
 }
    else if (optionThree !== optionOne  && optionThree === optionOne){
    console.log("True");
 }
    else if (optionThree === optionOne  && optionThree !== optionOne){
    console.log("True");
 }
    else {
    console.log("False");
 }
    
    
