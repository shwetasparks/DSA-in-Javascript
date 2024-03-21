// Node class definition
/**
    A
   / \
  B   C
 / \
D   E
*/

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  
//add child
  addChild(node) {
    this.children.push(node);
  }
}

// DFS function
function dfs(node, visited = {}) {
  if (!node) {
    return;
  }

  console.log(node.value);
  visited[node.value] = true;

  for (const child of node.children) {
    if (!visited[child.value]) {
      dfs(child, visited);
    }
  }
}

// Create the tree
const rootNode = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');

rootNode.addChild(nodeB);
rootNode.addChild(nodeC);
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);

// Use DFS starting from the root node
console.log("DFS traversal starting from node 'A':");
dfs(rootNode);
