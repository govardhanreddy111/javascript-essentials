function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.findPrevious = findPrevious;
    this.dispReverse = dispReverse;
    this.reverseLList = reverseLList;
}

function find(item) {
    var currentNode = this.head;
    while(currentNode.element !== item){
        currentNode = currentNode.next;
    }
    return currentNode;
}

function insert(newElement,item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}
function display() {
    var currentNode = this.head;
    while(currentNode !== null){
        console.log(currentNode.element);
        currentNode = currentNode.next;
    }
}
function findPrevious(item) {
    var currentNode = this.head;
    while(currentNode.next != null && currentNode.element !== item){
        currentNode = currentNode.next;
    }
    return currentNode;
}
function remove(item) {
  //  var previousNode = this.findPrevious(item);
    var removeItem = this.find(item);
    if(!(removeItem.next == null)){
        removeItem.previous.next = removeItem.next;
        removeItem.next.previous = removeItem.previous;
        removeItem.next = removeItem.previous = null;
    }
}
function findLast() {
    var currentNode = this.head;
    while(currentNode.next != null){
        currentNode = currentNode.next;
    }
    return currentNode;
}
function dispReverse() {
    var lastItem = this.findLast();
    while(lastItem.previous != null){
        console.log(lastItem.element);
        lastItem = lastItem.previous;
    }
}

function reverseLList() {
    var currentNode = this.head;

}
