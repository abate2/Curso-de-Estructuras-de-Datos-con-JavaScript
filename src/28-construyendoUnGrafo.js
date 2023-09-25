 class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];//Aqui se quiere que el indice que se le indique con el valor node a adjacentList que cree un indice  o key word  como haciamos en los hash e.g: 3: [1,2] aqui el 3 seria al numero que estamos agregando.
    this.nodes++;
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
 }

 const myGraph = new Graph();

//valores para la consola
 myGraph.addVertex("1");
 myGraph.addVertex("3");
 myGraph.addVertex("4");
 myGraph.addVertex("5");
 myGraph.addVertex("6");
 myGraph.addVertex("8");


 myGraph.addEdge("3","5");//aqui estamos ya estamos colocandoson los valores  que se comunican en cada edge que es como la especie  de pointer  que comunica nuestros nodos la linea si se quiere decir asi
 myGraph.addEdge("6","3");
 myGraph.addEdge("1","6");
 myGraph.addEdge("1","3");
 myGraph.addEdge("1","4");
 myGraph.addEdge("4","5");
 myGraph.addEdge("8","4");