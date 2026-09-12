

const {CreateLinkedList} = require('./CreateLinkedList')

    describe ('CreateLinkeList', () => {
    
    beforeEach(() => {
    myList = new CreateLinkedList
    });

    test('that i created a linked list has been created and empty',() => {
    expect (myList.head).toBeNull();
    expect (myList.size).toEqual(0);
    })
    
    test ('that i can add a node to my link list', () => {
    myList.append ("car");
    expect (myList.head.data).toEqual("car");
    expect (myList.size).toEqual(1);
    })
    
    test ('that i added multiple node to my linked list', () => {
    myList.append ("Toyota");
    expect (myList.head.data).toEqual("Toyota");
    expect (myList.size).toEqual(1);

    myList.append (10);
    expect (myList.size).toEqual(2);

    myList.append ("Lagos");
    expect (myList.size).toEqual(3);
    })
    
    test('that i prepend a node to my linked list', () => {
    myList.append ("Toyota");
    expect (myList.head.data).toEqual("Toyota");
    expect (myList.size).toEqual(1);

    myList.append (10);
    expect (myList.size).toEqual(2);

    myList.prepend ("Lagos");
    expect (myList.head.data).toEqual("Lagos")
    expect (myList.size).toEqual(3);
    })

    test ('that when i inserted a node to an index in my linked list', () => {
    myList.append ("Toyota");
    myList.append (10);
    myList.append ("Lagos");
    myList.insert (40, 2);
    
    expect (myList.head.data).toEqual("Toyota");
    expect (myList.head.next.data).toEqual(10);
    expect (myList.head.next.next.data).toEqual(40);
    expect (myList.head.next.next.next.data).toEqual("Lagos");
    expect (myList.size).toEqual(4);
    })

    test ('that when i append and pop a node in my linked list', () => {
    myList.append ("Toyota");
    expect (myList.head.data).toEqual("Toyota");
    expect (myList.size).toEqual(1);

    myList.pop ();
    expect (myList.head).toBeNull();
    expect (myList.size).toEqual(0);
    })

    test ('that when i append multiple data and pop node at index in my linked list it remove', () => {
    myList.append ("Toyota");
    myList.append (10);
    myList.append ("Lagos");
    myList.append (40);
    expect (myList.size).toEqual(4);

    expect (myList.pop ()).toEqual(40);
    expect (myList.head.next.next.data).toEqual("Lagos");
    expect (myList.size).toEqual(3);
    })


    })
