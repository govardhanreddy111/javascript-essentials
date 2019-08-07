class Grpah {
    constructor(){
        this.vertices = [];
        this.adjacentList = new Map();
    }

    addVertex(v){
        this.vertices.push(v);
        this.adjacentList.set(v,[]);
    }

    getAdjanceyListVertex(){
        return this.adjacentList.get(v);
    }

    addEdge(u,v){
        let uVertex = this.getAdjanceyListVertex(u);
        let vVertex = this.getAdjanceyListVertex(v);

        uVertex.push(v);
        vVertex.push(u);
    }
}