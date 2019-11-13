var convertArrayToBST = (arr) => {
	var mid = Math.floor((arr.length)/2);

	var leftArray = arr.slice(0, mid);
	var rightArray = arr.slice(mid+1, arr.length);

	var newNode = {val: arr[mid], left: null, right: null};

	if (leftArray.length > 0) {
		newNode.left = convertArrayToBST(leftArray);
	}

	if (rightArray.length > 0) {
		newNode.right = convertArrayToBST(rightArray);
	}

	return newNode;
}

var a = [1,2,3,4,5,6];

printNodes = (node) => {
	if (node.left) {
		printNodes(node.left);
	}
	console.log(node.val);
	if (node.right) {
		printNodes(node.right)
	}
}