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