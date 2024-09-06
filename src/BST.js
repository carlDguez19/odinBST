// eslint-disable-next-line no-unused-vars
import { Node } from "./Node";

export class BST {
    constructor(arr) {
        this.arrData = arr;
        this.root = this.buildTree(this.arrData);
    }
}