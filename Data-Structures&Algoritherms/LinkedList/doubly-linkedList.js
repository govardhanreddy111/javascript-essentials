function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}
function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    this.addToHead = addToHead;
    this.addToTail = addToTail;
    this.removeHead = removeHead;
    this.removeTail = removeTail;
    this.isEmpty = isEmpty;
    this.display = display;
    /*insert = insert;
    insertEnhanced = insertEnhanced;
    find = find;
    findPrevious = findPrevious;


    remove = remove;
    removeAt = removeAt;
    indexOf = indexOf;
    */
}

function addToHead(element) {
    let newNode = new Node(element);
    if(this.head == null){
        this.tail = newNode;
    }else{
        newNode.next = this.head;
        this.head.previous = newNode;
    }
    this.head = newNode;
    this.length++;
}
function addToTail(element) {
    let newNode = new Node(element);
    if(this.tail ==null){
        this.head = newNode;
    }else{
        this.tail.next = newNode;
        newNode.previous = this.tail;
    }
    this.tail = newNode;
    this.length++;
}
function removeHead() {
    let headExists = this.head;
    if(headExists){
        if(this.head.next != null){
            let oldHead = this.head;
            this.head = oldHead.next;
            this.head.previous = null;
            oldHead = null;
        }
        else{
            this.head = null;
            this.tail = null;
        }
        this.length--;
    }
}
function removeTail() {
    let tailExists = this.tail;
    if(tailExists){
        if(this.tail.previous != null){
            let oldTail = this.tail;
            this.tail = oldTail.previous;
            this.tail.next = null;
            oldTail = null;
        }else{
            this.head = null;
            this.tail = null;
        }
        this.length--;
    }
}
function isEmpty() {
    return (this.length === 0);
}
function display() {
    let head = this.head;
    while(head.next !== null){
        console.log(head.element)
        head = head.next;
    }
    console.log(head.element)
}