import { Node } from "./Node";

export class BST {
    constructor(arr) {
        this.arrData = arr;
        this.root = this.buildTree(this.arrData);
    }

    buildTree(arr) {

        arr.sort((a, b) => a - b);
        const uniqueArr = [...new Set(arr)];

        if (uniqueArr.length == 0) return null;
        let mid = uniqueArr.length / 2;
        let root = new Node(uniqueArr[mid]);

        root.left = this.buildTree(uniqueArr.slice(0, mid));
        root.right = this.buildTree(uniqueArr.slice(mid));

        return root;
    }

    insert(root, dataNum) {

        if (root === null)//if tree empty create new node and return it as root
            return new Node(dataNum);

        // Duplicates not allowed    
        if (root.data === dataNum)
            return root;

        if (dataNum < root.data)
            root.leftChild = this.insert(root.left, dataNum);
        else if (dataNum > root.data)
            root.rightChild = this.insert(root.right, dataNum);

        return root;
    }

    delete(root, x) {
        // Base case
        if (root === null) {
            return root;
        }

        // If key to be searched is in a subtree
        if (root.data > x) {
            root.leftChild = this.delete(root.leftChild, x);
        } else if (root.key < x) {
            root.rightChild = this.delete(root.rightChild, x);
        } else {
            // If root matches with the given key

            // Cases when root has 0 children or 
            // only right child
            if (root.leftChild === null)
                return root.rightChild;

            // When root has only left child
            if (root.rightChild === null)
                return root.leftChild;

            // When both children are present
            let succ = this.getSuccessor(root);
            root.data = succ.data;
            root.rightChild = this.delete(root.rightChild, succ.data);
        }
        return root;
    }

    getSuccessor(curr) {
        curr = curr.rightChild;
        while (curr !== null && curr.leftChild !== null) {
            curr = curr.leftChild;
        }
        return curr;
    }

    find(root, value) {
        if (root === null) {
            return root;
        } else if (root.data < value) {
            return this.find(root.rightChild, value);
        } else if (root.data > value) {
            return this.find(root.leftChild, value);
        } else {
            return root;
        }
    }

    levelOrder(root, callback) {
        if (callback === null) {
            throw new Error("Must enter a callback function!");
        }
        if (root === null) {
            return;
        }
        let Q = [];
        Q.push(root);
        while (Q.length > 0) {//or while(Q)????
            let curr = Q.shift();
            console.log(curr.data)//debug
            if (curr.leftChild != null) {
                Q.push(curr.leftChild);
            }
            if (curr.rightChild != null) {
                Q.push(curr.rightChild);
            }
            this.callback(curr);
        }
    }

    preorder(root, callback) {
        if (callback === null) {
            throw new Error("Must enter a callback function!");
        }
        if (root === null) {
            return;
        }
        this.callback(root);
        this.preorder(root.leftChild, callback);
        this.preorder(root.rightChild, callback);
    }

    inorder(root, callback) {
        if (callback === null) {
            throw new Error("Must enter a callback function!");
        }
        if (root === null) {
            return;
        }
        this.inorder(root.leftChild, callback);
        this.callback(root);
        this.inorder(root.rightChild, callback);
    }

    postorder(root, callback) {
        if (callback === null) {
            throw new Error("Must enter a callback function!");
        }
        if (root === null) {
            return;
        }
        this.postorder(root.leftChild, callback);
        this.postorder(root.rightChild, callback);
        this.callback(root);
    }

    height(node) {
        if (node == null) {
            return -1;
        }
        return Math.max(this.height(node.leftChild), this.right(node.rightChild)) + 1;
    }

    prettyPrint(node, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    };

}