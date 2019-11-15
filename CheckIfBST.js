var isValidBST = function(root) {
	return isValidBST(root, null, null);
}

var isValidBST = function(root, min, max) {

	if (root === null) {
		return true;
	}

	if ((min !== null && root.val <= min) || (max !== null && root.val > max)) {
		return false;
	}

	if (!isValidBST(root.left, min, root.val) || !isValidBST(root.right, root.val, max)) {
		return false;
	}

	return true;
}