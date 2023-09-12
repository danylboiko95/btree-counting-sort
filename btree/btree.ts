class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  height: number;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    this.root = this.insertRecursive(this.root, value);
  }

  private insertRecursive(node: TreeNode<T> | null, value: T): TreeNode<T> {
    if (!node) {
      return new TreeNode(value);
    }

    if (value < node.value) {
      node.left = this.insertRecursive(node.left, value);
    } else {
      node.right = this.insertRecursive(node.right, value);
    }

    return node;
  }

  inOrderTraversal(): T[] {
    const result: T[] = [];

    function traverse(node: TreeNode<T> | null) {
      if (node) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    }

    traverse(this.root);
    return result;
  }
}

const avlTree = new AVLTree<number>();
avlTree.insert(60);
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(0);
avlTree.insert(40);
avlTree.insert(30);
avlTree.insert(7);

console.log(avlTree.inOrderTraversal()); // [10, 20, 30]
