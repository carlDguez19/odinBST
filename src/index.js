import { BST } from "./BST";
import { printer } from "./BST";

let ogArr = createArr();
let firstBST = new BST(ogArr);
let fbstRoot = firstBST.root;
//console.log(firstBST.root.data);

firstBST.prettyPrint(fbstRoot);
let isBalancedBool = firstBST.isBalanced(fbstRoot);
console.log(isBalancedBool);
console.log("levelOrder: ")
firstBST.levelOrder(fbstRoot, printer);
firstBST.prettyPrint(fbstRoot);
console.log("\n\npreOrder: ")
firstBST.preorder(fbstRoot, printer);
firstBST.prettyPrint(fbstRoot);
console.log("\n\ninorder: ")
firstBST.inorder(fbstRoot, printer);
firstBST.prettyPrint(fbstRoot);
console.log("\n\npostOrder: ");
firstBST.postorder(fbstRoot, printer);
firstBST.insertInverse(fbstRoot, 115);
firstBST.insertInverse(fbstRoot, 123);
firstBST.insertInverse(fbstRoot, 50);
ogArr.push(115);
ogArr.push(123);
ogArr.push(50);
firstBST.prettyPrint(fbstRoot);
let isBalancedBool3 = firstBST.isBalanced(fbstRoot);
console.log(isBalancedBool3);
let newRoot = firstBST.rebalance(ogArr);
firstBST.prettyPrint(newRoot);
let isBalancedBool4 = firstBST.isBalanced(newRoot.root);
console.log(isBalancedBool4);
console.log("\n\nlevelOrder: ")
firstBST.levelOrder(newRoot, printer);
firstBST.prettyPrint(newRoot);
console.log("\n\npreOrder: ")
firstBST.preorder(newRoot, printer);
firstBST.prettyPrint(newRoot);
console.log("\n\ninOrder: ")
firstBST.inorder(newRoot, printer);
firstBST.prettyPrint(newRoot);
console.log("\n\npostOrder: ")
firstBST.postorder(newRoot, printer);
firstBST.insert(newRoot, 147);
firstBST.prettyPrint(newRoot);
newRoot = firstBST.delete(newRoot, 50);
console.log("\n\n\n\n\n");
firstBST.prettyPrint(newRoot);
let foundNode = firstBST.find(newRoot, 1);
console.log(foundNode.data);
let h = firstBST.height(newRoot);
console.log(h);
let d = firstBST.findDepth(newRoot, 115);
console.log(d);


function createArr() {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}