var getHeight = (node) => {

	if (!node) {
		return -1;
	}

	var leftHeight = getHeight(node.left);
	var rightHeight = getHeight(node.right);

	if (leftHeight === Number.MIN_SAFE_INTEGER) {
		return Number.MIN_SAFE_INTEGER;
	}

	if (rightHeight === Number.MIN_SAFE_INTEGER) {
		return Number.MIN_SAFE_INTEGER;
	}

	if (Math.abs(leftHeight - rightHeight) > 1) {
		return Number.MIN_SAFE_INTEGER;
	} else {
		return (leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1)
	}
}