class Grpah {
    constructor(){
        this.vertices = [];
        this.adjacentList = new Map();
    }

    addVertex(v){
        this.vertices.push(v);
        this.adjacentList.set(v,[]);
    }

    getAdjanceyListVertex(v){
        return this.adjacentList.get(v);
    }

    addEdge(u,v){
        let uVertex = this.getAdjanceyListVertex(u);
        let vVertex = this.getAdjanceyListVertex(v);

        uVertex.push(v);
        vVertex.push(u);
    };

    toString(){
        this.adjacentList.forEach((value,key)=>{
            console.log(`${key} => ${value}`);
        })
    }
}