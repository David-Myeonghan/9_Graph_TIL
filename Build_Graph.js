class Graph {
	constructor() {
		this.numberOfNodes = 0;
		this.adjacentList = {};
		// why object?, not arrays? : Inserting and Deleting costs a lot.
	}

	// ---------------------------------- My Answer === Solution
	addVertex(node) {
		this.adjacentList[node] = [];
		this.numberOfNodes++;
	}

	// ---------------------------------- My Answer without if statement === Solution
	// Undirected graph
	addEdge(node1, node2) {
		// valid check, the object must have vertices as its own properties.
		if (this.adjacentList.hasOwnProperty(node1) && this.adjacentList.hasOwnProperty(node2)) {
			// No duplicate connections in the array.
			if (!this.adjacentList[node1].includes(node2) && !this.adjacentList[node2].includes(node1)) {
				this.adjacentList[node1].push(node2);
				this.adjacentList[node2].push(node1);
			} else {
				return console.log("Duplicate Connection");
			}
		} else {
			return console.log("Not Valid Node");
		}
	}
	showConnections() {
		const allnodes = Object.keys(this.adjacentList);
		for (let node of allnodes) {
			let nodeConnections = this.adjacentList[node];
			let connections = "";
			let vertex;
			for (vertex of nodeConnections) {
				connections += vertex + " ";
			}
			console.log(node + "-->" + connections);
		}
	}
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");
// myGraph.addEdge("6", "5");
// console.log(myGraph);

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
