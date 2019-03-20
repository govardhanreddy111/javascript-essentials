function Dictionary() {
    this.dataStore = new Array();
    this.add = add;
    this.remove = remove;
    this.find = find;
    this.count = count;
    this.clear = clear;
    this.showAll = showAll;
}
function add(key,value) {
    this.dataStore[key] = value;
}
function remove(key) {
    delete this.dataStore[key];
}
function find(key) {
    return this.dataStore[key];
}
function count() {
   return Object.keys(pBook.dataStore).length
}
function clear() {
    this.dataStore = [];
}
function showAll() {
    let keys = Object.keys(this.dataStore);
    for(let key in keys){
        console.log(keys[key]+" - "+this.dataStore[keys[key]]);
    }
}