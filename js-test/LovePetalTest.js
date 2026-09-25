const {checkIfTwoPartnersAreInLove} = require('./LovePetal');
//const {LovePetal} = require('./LovePetal')

    describe ('LovePetal', () => {
    
//    beforeEach(() => {
//    myPetal = new LovePetal
//    });

    test('that return true if one petal is even and the other is odd',() => {
    expect (checkIfTwoPartnersAreInLove(6,5)).toBetrue();
    })
    
})
