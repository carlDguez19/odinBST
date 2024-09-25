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
ogArr.push(115);
ogArr.push(123);
firstBST.prettyPrint(fbstRoot);
let isBalancedBool3 = firstBST.isBalanced(fbstRoot);
console.log(isBalancedBool3);
let newRoot = firstBST.rebalance(ogArr);
firstBST.prettyPrint(newRoot);
let isBalancedBool4 = firstBST.isBalanced(newRoot.root);
console.log(isBalancedBool4);
console.log("\n\nlevelOrder: ")
firstBST.levelOrder(newRoot.root, printer);
console.log("\n\npreOrder: ")
firstBST.prettyPrint(newRoot);
firstBST.preorder(newRoot.root, printer);
// firstBST.inorder(fbstRoot, 'poop');
// firstBST.postorder(fbstRoot, 'poop');

function createArr() {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}