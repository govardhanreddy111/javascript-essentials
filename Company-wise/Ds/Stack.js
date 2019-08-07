class Stack {
    constructor(){
        this.data = [];
        this.count = 0;
    }
    push(element){
        this.data.push(element);
        this.count++;
    }
    pop(){
        this.data.pop();
        this.count--;
    }
    peek(){
        debugger;
        return this.data[this.count-1];
    }
    isEmpty(){
        return (this.count === 0)
    }
}