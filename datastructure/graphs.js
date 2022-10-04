/* 인접 리스트 그래프 addvertex 의사코드
1. 인접 리스트 클래스 생성, constructor에는 빈 객체를 담는 변수 선언
2. addVertex : vertex의 이름을 받아서 객체의 키로 삽입하면 됨.
키에 해당하는 값은 빈 배열로 한다.(아직 edge 안만들어줬으니까) */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (item) => item !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (item) => item !== vertex1
    );
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].map((item) => {
      this.removeEdge(item, vertex);
    });
    delete this.adjacencyList[vertex];
  }
}
let graph = new Graph();
graph.addVertex("TOKYO");
graph.addVertex("SEOUL");
graph.addVertex("Taiwan");
graph.addVertex("Turkey");
graph.addEdge("TOKYO", "Taiwan");
graph.addEdge("TOKYO", "SEOUL");
graph.addEdge("Turkey", "SEOUL");
graph.addEdge("Taiwan", "SEOUL");
graph.removeVertex("SEOUL");
console.log(graph);
