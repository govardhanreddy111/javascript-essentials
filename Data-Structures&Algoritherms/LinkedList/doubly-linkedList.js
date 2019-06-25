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
    this.find = find;
    this.findPrevious = findPrevious;
    this.indexOf = indexOf;
    this.insert = insert;
    this.findPositionNode = findPositionNode;
    this.remove = remove;
    this.removeAt = removeAt
    /*;
    insertEnhanced = insertEnhanced;

    ;
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
    while(head){
        console.log(head.element)
        head = head.next;
    }
   // console.log(head.element)
}
function find(item) {
    let currentNode = this.head;
    while(currentNode){
        if(currentNode.element === item){
            return currentNode;
        }
        currentNode = currentNode.next;
    }
    return null;
}
function findPrevious(item) {
    let currentNode = this.head;
    while(currentNode){
        if(currentNode.element === item){
            return currentNode.previous;
        }
        currentNode = currentNode.next;
    }
    return null;
}
function indexOf(item) {
    let index = 0;
    let currentNode = this.head;
    while(currentNode){
        if(currentNode.element === item){
            return index;
        }else{
            currentNode = currentNode.next;
            index++;
        }
    }
    return -1;
}
function insert(position,element) {
    let current_position = this.findPositionNode(position);
    let newNode = new Node(element);
    if(current_position) {
        newNode.previous = current_position.previous;
        newNode.next = current_position;
        current_position.previous.next = newNode;
        this.length++;
    }else{
        throw new Error("Node does not exist")
    }
}
function findPositionNode(position) {
    let index = 0;
    let head = this.head;
    while(head){
        if(index === position){
            return head;
        }else{
            head = head.next;
            index++;
        }
    }
}
function remove(item) {
    let remove_item = this.find(item);
    if(remove_item){
        remove_item.previous.next = remove_item.next;
        remove_item.next.previous = remove_item.previous;
        remove_item.next = remove_item.previous = null;
        this.length--;
    }
}
function removeAt(position) {
    let remove_node = this.findPositionNode(position);
    this.remove(remove_node.element);
}