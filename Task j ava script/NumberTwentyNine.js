
    const Scanned = require ('prompt-sync')();
    const WordCheck = Scanned ('Enter a word to check if it start with vowel or consonant: ');


        const vowel = ['a', 'e', 'i', 'o' ,'u']
        const checkFirstLetter = WordCheck.charAt(0). toLowerCase();

        

        if  (WordCheck.charAt(0). toLowerCase() ==='a' || WordCheck.charAt(0). toLowerCase() ==='e' ||WordCheck.charAt(0). toLowerCase() ==='i' ||WordCheck.charAt(0). toLowerCase() ==='o' || WordCheck.charAt(0). toLowerCase() ==='u') {

            console.log ('vowel')
      }
            else {
            console.log('Constant')
}
