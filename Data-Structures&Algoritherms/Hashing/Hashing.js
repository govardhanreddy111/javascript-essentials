function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
}
function put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
}
function simpleHash(data) {
    let total = 0;
    let i;
    for(i = 0; i < data.length; i++){
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}
function betterHash(data) {
    let total = 0;
    const H = 37;
    let i;
    for(i = 0; i < data.length; i++){
        total += H * total + data.charCodeAt(i);
    }
    total = total % this.table.length;
    if(total < 0){
        total += this.table.length - 1;
    }
    return parseInt(total);
}
function showDistro() {
    let i;
    for(i = 0; i < this.table.length;i++){
        if(this.table[i] !== undefined){
            console.log(i+" - "+this.table[i]);
        }
    }
}