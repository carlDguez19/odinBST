import { Node } from "./Node";

export class BST {
    constructor(arr) {
        this.arrData = arr;
        this.root = this.buildTree(arr);
    }

    buildTree(arr) {
        //sort and get rid of duplicates
        const uniqueSet = new Set(arr);
        const uniqueArr = Array.from(uniqueSet);
        uniqueArr.sort((a, b) => a - b);


        if (uniqueArr.length < 1) {
            return null;
        } else {
            let mid = Math.floor(uniqueArr.length / 2);
            let root = new Node(uniqueArr[mid]);

            root.leftChild = this.buildTree(uniqueArr.slice(0, mid));
            root.rightChild = this.buildTree(uniqueArr.slice(mid + 1));

            return root;
        }

    }

    insert(root, dataNum) {

        if (root === null)//if tree empty create new node and return it as root
            return new Node(dataNum);

        // Duplicates not allowed    
        if (root.data === dataNum)
            return root;

        if (dataNum < root.data)
            root.leftChild = this.insert(root.leftChild, dataNum);
        else if (dataNum > root.data)
            root.rightChild = this.insert(root.rightChild, dataNum);

        return root;
    }

    insertInverse(root, dataNum) {

        if (root === null)//if tree empty create new node and return it as root
            return new Node(dataNum);

        // Duplicates not allowed    
        if (root.data === dataNum)
            return root;

        if (dataNum < root.data)
            root.rightChild = this.insert(root.rightChild, dataNum);
        else if (dataNum > root.data)
            root.leftChild = this.insert(root.leftChild, dataNum);

        return root;
    }

    delete(root, dataNum) {
        // Base case
        if (root === null) {
            return root;
        }

        // If key to be searched is in a subtree
        if (root.data > dataNum) {
            console.log("here then");
            root.leftChild = this.delete(root.leftChild, dataNum);
            //return root;
        } else if (root.data < dataNum) {
            console.log("should be here to delete");
            root.rightChild = this.delete(root.rightChild, dataNum);
            //return root;
        } else {
            // If root matches with the given key

            // Cases when root has 0 children or 
            // only right child
            if (root.leftChild === null) {
                console.log('about to delete');
                return root.rightChild;
            }
            // When root has only left child
            if (root.rightChild === null) {
                return root.leftChild;
            }
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

    find(root, dataNum) {
        if (root === null) {
            return Number.NEGATIVE_INFINITY;
        } else if (root.data < dataNum) {
            return this.find(root.rightChild, dataNum);
        } else if (root.data > dataNum) {
            return this.find(root.leftChild, dataNum);
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
            if (curr.leftChild != null) {
                Q.push(curr.leftChild);
            }
            if (curr.rightChild != null) {
                Q.push(curr.rightChild);
            }
            callback(curr);
        }
    }

    preorder(root, callback) {
        if (callback === null) {
            throw new Error("Must enter a callback function!");
        }
        if (root === null) {
            return;
        }
        callback(root);
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
        callback(root);
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
        callback(root);
    }

    height(node) {
        if (node == null) {
            return -1;
        }
        return Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
    }

    findDepth(root, x) {
        // let depth = 0;
        // let curr = root;
        if (root === null) {
            return Number.NEGATIVE_INFINITY;
        } else if (root.data < x) {
            // curr = curr.rightChild;
            // depth++;
            return this.findDepth(root.rightChild, x) + 1
        } else if (root.data > x) {
            // curr = curr.leftChild;
            // depth++;
            return this.findDepth(root.leftChild, x) + 1
        } else {
            return 0;
        }
    }

    isBalanced(root) {
        // Base condition
        if (root == null)
            return true

        // for left and right subtree height
        let lh = this.height(root.leftChild);
        let rh = this.height(root.rightChild);

        // allowed values for (lh - rh) are 1, -1, 0
        if (Math.abs(lh - rh) <= 1 && this.isBalanced(root.leftChild) == true && this.isBalanced(root.rightChild) == true)
            return true;

        // if we reach here means tree is not 
        // height-balanced tree
        return false;
    }

    rebalance(arr) {
        //let arr = [];
        //let newArr = this.inorderArr(oldArr, arr);
        let rebRoot = this.buildTree(arr);
        this.root = rebRoot;
        return rebRoot;
    }

    prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
            return;
        }
        if (node.rightChild !== null) {
            this.prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.leftChild !== null) {
            this.prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    };

}

export function printer(node) {
    console.log(node.data);
}