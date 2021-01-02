//      2 --- 0
//    /  \
//   /     \
//  1-------3

// Edge List
const graph = [
	[0, 2], // Each Array simply states the connection
	[2, 3],
	[2, 1],
	[1, 3],
];

// Adjacent List
const graph = [
	// The index of the array is the value of the actual Graph node
	[2], // node 0 have connection to node 2.
	[2, 3], // node 1 have connection to node 2, and 3.
	[0, 1, 3],
	[1, 2],
	// can use object, array, linked list
	// index is the node, value is the nodes' neighbours.
];

// Adjacent Matrix
const graph = {
	// The index of the array is the value of the actual Graph node
	0: [0, 0, 1, 0], // node 0 have connection to node 2.
	1: [0, 0, 1, 1], // node 1 have connection to 2, and 3.
	2: [1, 1, 0, 1], // node 2 have connection to 0, 1, and 3.
	3: [0, 1, 1, 0], // node 3 have connection to 1, and 2.
	//have zeros(no) and ones(yes) indicating whether the node X has a connection to node Y.
	// can be objects, arrays, linked lists
};
