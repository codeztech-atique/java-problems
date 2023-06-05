// Problem 2

class GNode {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    getName() {
      return this.name;
    }
  
    getChildren() {
      return this.children;
    }
  
    addChild(child) {
      this.children.push(child);
    }
  }
  
  function paths(node) {
    const result = [];
    const currentPath = [];
    const visited = new Set();
  
    pathsHelper(node, result, currentPath, visited);
  
    return result;
  }
  
  function pathsHelper(node, result, currentPath, visited) {
    currentPath.push(node);
    visited.add(node);
  
    if (node.getChildren().length === 0) {
      result.push([...currentPath]);
    }
  
    for (const child of node.getChildren()) {
      if (!visited.has(child)) {
        pathsHelper(child, result, currentPath, visited);
      }
    }
  
    currentPath.pop();
    visited.delete(node);
  }
  
  // Create a sample graph
  const nodeA = new GNode("A");
  const nodeB = new GNode("B");
  const nodeC = new GNode("C");
  const nodeD = new GNode("D");
  const nodeE = new GNode("E");
  const nodeF = new GNode("F");
  const nodeG = new GNode("G");
  const nodeH = new GNode("H");
  const nodeI = new GNode("I");
  const nodeJ = new GNode("J");
  
  nodeA.addChild(nodeB);
  nodeB.addChild(nodeE);
  nodeB.addChild(nodeF);
  nodeA.addChild(nodeC);
  nodeC.addChild(nodeG);
  nodeC.addChild(nodeH);
  nodeC.addChild(nodeI);
  nodeA.addChild(nodeD);
  nodeD.addChild(nodeJ);
  
  // Calculate paths starting from nodeA and print the result
  const result = paths(nodeA);
  result.forEach((path) => {
    const names = path.map((node) => node.getName()).join(" ");
    console.log(names);
  });
  