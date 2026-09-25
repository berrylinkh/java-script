const {checkIfTwoPartnersAreInLove} = require('./LovePetal');

    describe ('LovePetal', () => {

    test('that return true if one petal is even and the other is odd',() => {
    expect (checkIfTwoPartnersAreInLove(2,7)).toEqual(true);
    })
    
})

const {checkIfTwoPartnersAreNotInlove} = require('./LovePetal');

    describe ('LovePetal', () => {

    test('that return false if the petalone and petal two is even or odd ',() => {
    expect (checkIfTwoPartnersAreNotInlove(8,8)).toEqual(false);
    })
    
})
