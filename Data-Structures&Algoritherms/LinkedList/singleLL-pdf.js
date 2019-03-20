function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
}

function find(item) {
    var currentNode = this.head;
    while(currentNode.element != item){
        currentNode = currentNode.next;
    }
    return currentNode;
}
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
function remove(item) {
    var prevNode = this.findPrevious(item);
    if(!(prevNode.next == null)){
        prevNode.next = prevNode.next.next;
    }
}
function display() {
    var currentNode = this.head;
    while(!(currentNode.next == null)){
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}
function findPrevious(item) {
    var currentNode = this.head;
    while(!(currentNode.next == null) && (currentNode.next.element != item)){
        currentNode = currentNode.next;
    }
    return currentNode;
}