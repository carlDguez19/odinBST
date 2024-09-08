// eslint-disable-next-line no-unused-vars
import { Node } from "./Node";

export class BST {
    constructor(arr) {
        this.arrData = arr;
        this.root = this.buildTree(this.arrData);
    }

    buildTree(arr, start, end) {
        if (start > end) return null;
        let mid = (start + end) / 2;
        let root = new Node(arr[mid]);

        root.left = this.buildTree(arr, 0, mid);
        root.right = this.buildTree(arr, mid + 1, end);

        return root;
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
