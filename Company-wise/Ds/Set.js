function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove  = remove;
    this.size  = size;
    this.show = show;
    this.isExists = isExists;
}
function add(data) {
    if(isExists(data)){
        return false;
    }
    else{
        this.dataStore.push(data);
        return true;
    }
}
function remove(data) {
    if(isExists(data)){
        let pos = this.dataStore.indexOf(data);
        this.dataStore.splice(pos,1);
    }
}

function isExists(data) {
    return (this.dataStore.indexOf(data) > 0);
}
function size() {
    return this.dataStore.length;
}
function show() {
    let i;
    for(i in this.dataStore){
        console.log(this.dataStore[i]);
    }
    return;
}