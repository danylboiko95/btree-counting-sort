var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
    return TreeNode;
}());
var AVLTree = /** @class */ (function () {
    function AVLTree() {
        this.root = null;
    }
    AVLTree.prototype.insert = function (value) {
        this.root = this.insertRecursive(this.root, value);
    };
    AVLTree.prototype.insertRecursive = function (node, value) {
        if (!node) {
            return new TreeNode(value);
        }
        if (value < node.value) {
            node.left = this.insertRecursive(node.left, value);
        }
        else {
            node.right = this.insertRecursive(node.right, value);
        }
        return node;
    };
    AVLTree.prototype.inOrderTraversal = function () {
        var result = [];
        function traverse(node) {
            if (node) {
                traverse(node.left);
                result.push(node.value);
                traverse(node.right);
            }
        }
        traverse(this.root);
        return result;
    };
    return AVLTree;
}());
var avlTree = new AVLTree();
avlTree.insert(60);
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(0);
avlTree.insert(40);
avlTree.insert(30);
avlTree.insert(7);
console.log(avlTree.inOrderTraversal()); // [10, 20, 30]
