


class Node {
    constructor (data){
    this.data = data;
    this.next = null;
    }
}

class CreateLinkedList {
    constructor () {
    this.head = null;
    this.size = 0;
    }
        append (data) {
        let mynewNode = new Node(data);
        if (this.head == null) {
            this.head = mynewNode;
        }
        else {
            let current = this.head;
            while (current.next != null) {
            current = current.next;
            }
          current.next = mynewNode
        }
         this.size ++;
        }
    
        prepend (data) {
        let mynewNode = new Node(data);
        if (this.head == null) {
            this.head = mynewNode;
        }
        else {
           mynewNode.next = this.head;
           this.head = mynewNode;      
        }
            this.size ++;
        }

        insert (data, index) {
        let mynewNode = new Node(data);
        let count = 0;
        if (this.head == null){
            this.head = mynewNode;
        }
        else {
            let current = this.head;
            while(count < index-1){
                current = current.next;
                count ++;
                }
            mynewNode.next= current.next;
            current.next = mynewNode; 
            }
            this.size ++;
        }

         pop() {
        let mynewNode = new Node();
        if (this.head == null) {
            return null;
        }
        if (this.head.next == null) {
            let removeData = this.head.data;
            this.head = null;
            this.size --;
            return removeData;
            }
        }

        popAt (index) {
        let mynewNode = new Node();
        if (this.head == null) {
            return null;
        }
        if (index == 0) {
            let removeData = this.head.data;
            this.head = this.head.next;
            this.size --;
            return removeData;
            }
        let count = 0;
        let current = this.head;
        while(count < index-1){
         current = current.next;
          count ++;
           }
          let removeData = current.next.data;
          current.next = current.next.next;
            this.size --;
            return removeData;           
        }

}


module.exports = {CreateLinkedList,Node};


