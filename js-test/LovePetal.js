
function checkIfTwoPartnersAreInLove(petalOne, petalTwo){
    
    if (petalOne % 2 == 0 && petalTwo %2 !=0 || petalTwo %2 ==0 && petalOne %2 !=0 ){
    return true;
    }
}

function checkIfTwoPartnersAreNotInlove(petalOne, petalTwo){
    
    if (petalOne % 2 == 0 && petalTwo %2 ==0 || petalOne % 2 != 0 && petalTwo %2 !=0){
    return false;
    }
}

module.exports = {checkIfTwoPartnersAreInLove, checkIfTwoPartnersAreNotInlove};
