class Graph{
  constructor(){
    this.adjacencyList = {}
  }

  //{A:[]}
  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex]=[]
      return true;
    }
    return false;
  }
}

let myGraph=new Graph();
myGraph.addVertex("A")
myGraph.addVertex("B")
myGraph.addVertex("C")
console.log(myGraph)