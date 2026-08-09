

const Scanned = require ('prompt-sync')();
const SideOne = Scanned ('Enter length for side one: ');
const SideTwo = Scanned ('Enter length for side two: ');
const SideThree = Scanned ('Enter length for side three: ');

    if (SideOne === SideTwo && SideOne ===SideThree){
    console.log("it is Equilateral")
}
   else if (SideOne === SideTwo && SideOne !==SideThree){
    console.log("it is Isosceles")
}
 
    else if (SideOne !== SideTwo && SideOne !==SideThree){
    console.log("it is Scalene")
 }

