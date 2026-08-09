

    const Scanned = require ('prompt-sync')();
    const age = Scanned ('Enter your current age: ');
    const voterId = Scanned ('Do you have a votersID (yes/no): ');
    const citizenship = Scanned ('Are you a citizen(yes/no): ');

        let userResponse = 'yes';

    if (age >= 18 && voterId === userResponse && citizenship === userResponse) {
    console.log("Eligible to vote: True");
}
    else {
    console.log("Eligible to vote: False");
 }
