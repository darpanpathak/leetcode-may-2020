/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    if (!root || (!root.left && !root.right)) {
        return false;
    }
    var xParent, yParent, xRow, yRow;

    xParent = findParent(root, x);
    yParent = findParent(root, y);

    if (xParent === yParent)
        return false;

    let size = 1;
    const queue = [root];
    const nodes = [];

    while (queue.length) {
        size = queue.length;
        const tempArr = [];
        while (size--) {
            const node = queue.shift();

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }

            tempArr.push(node.val);
        }

        nodes.push(tempArr);
    }

    for (let i = 0; i < nodes.length; i++) {
        const col = nodes[i];
        isFound = false;
        for (let j = 0; j < col.length; j++) {
            if (nodes[i][j] == x) {
                xRow = i;
                isFound = true;
            }
            if (nodes[i][j] == y) {
                yRow = i;
                isFound = true;
            }
        }

        if (isFound && (!xRow || !yRow)) {
            return false;
        }
    }


    return true;

};

function findParent(root, value) {
    var left, right;
    if (!root) { return false; }
    if (root.left !== null && root.left.val == value) { return root; }
    if (root.right !== null && root.right.val == value) { return root; }
    return findParent(root.left, value) || findParent(root.right, value);
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function main() {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.right = new TreeNode(5);

    console.log(isCousins(root, 4, 5));
}

main();