

function returnTheNumberOfOccurenceOfACharacterInAString (text, word) {
    let characterCounter =0;

    for (let index =0; index < text.length; index++) {
        if (text.charAt(index) == word){
         characterCounter ++;
        }
    }
    return characterCounter;
    }


let text = "village people";
let word ='e';

console.log (returnTheNumberOfOccurenceOfACharacterInAString (text, word));
