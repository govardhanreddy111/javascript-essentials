function Node(data,left = null,right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show() {
    return this.data;
}
function Bst() {
    this.root = null;
    this.insert = insert;
    this.inorder = inorder;
    this.preorder = preorder;
    this.postorder = postorder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
    this.removeNode = removeNode;
}
function insert(data) {
    let newNode = new Node(data);
    if(this.root ===  null){
        this.root = newNode;
    }else{
        let current = this.root;
        let parent;
        while(current){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current === null){
                    parent.left = newNode;
                    break;
                }
            }
            else{
                current = current.right;
                if(current === null){
                    parent.right = newNode;
                    break;
                }
            }
        }
    }
}
function inorder(node) {
    if(!(node === null)){
        inorder((node.left));
        console.log(node.show()+" ")
        inorder(node.right);
    }
}

function preorder(node) {
    if(!(node === null)){
        console.log(node.show()+" ")
        preorder((node.left));
        preorder(node.right);
    }
}
function postorder(node) {
    if(!(node === null)){
        postorder(node.left);
        postorder(node.right);
        console.log(node.show()+" ");
    }
}
function getMin(node) {
    let current = node || this.root;
    while(current.left !== null){
        current = current.left;
    }
    return current.data;
}
function getMax() {
    let current = this.root;
    while(current.right !== null){
        current = current.right;
    }
    return current.data;
}
function find(value) {
    let current = this.root;
    if(value < current.data){
        while(current.left !== null){
            current = current.left;
            if(current.data === value){
                return current;
            }
        }
    }else{
        while(current.right !== null){
            current = current.right;
            if(current.data === value){
                return current;
            }
        }
    }
}
function remove(data) {
    return !(removeNode(this.root,data) === false);
}
function removeNode(root,data) {
    if( root === null){
        return false;
    }
    if(data === root.data){
        if(root.left === null && root.right === null){
           return null;
        }
        if(root.left === null){
            return root.right
        }
        if(root.right === null){
            return root.left;
        }
        let tempNode = getSmallest(root.right);
        root.data = tempNode.data;
        root.right = removeNode(root.right,tempNode.data);
        return root;
    }else if(data < root.data){
        root.left = removeNode(root.left,data);
        return root;
    }else{
        root.right = removeNode(root.right,data);
        return root;
    }
}

function getSmallest(node) {
    return node.left.data < node.right.data ? node.left : node.right;
}