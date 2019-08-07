function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (let i = 0; i < this.vertices; i++){
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.marked = [];
    for(let i = 0; i < this.vertices;i++){
        this.marked[i] = false;
    }
}

function addEdge(v,w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for(let i = 0; i < this.vertices; i++){
        console.log(i+ " --> ");
        for(let j = 0; j < this.vertices; j++){
            if(this.adj[i][j] !== undefined){
                console.log(this.adj[i][j]+' ');
            }
        }
    }
}
function dfs(v) {
    this.marked[v] = true;
    if(this.adj[v] !== undefined){
        console.log("Visited Vertex: "+v);
    }
   /* let w;
    for(w in this.adj[w]){
        if(!this.marked[w]){
            this.dfs(w);
        }
    }*/
    this.adj.forEach((w)=>{
        if(!this.marked[w]){
            this.dfs(w);
        }
    })
}