import { BST } from "./BST";

let ogArr = createArr();
let firstBST = new BST(ogArr);
let fbstRoot = firstBST.root;
let isBalancedBool = firstBST.isBalanced(fbstRoot);
console.log(isBalancedBool);
firstBST.levelOrder(fbstRoot, 'poop');
firstBST.preorder(fbstRoot, 'poop');
firstBST.inorder(fbstRoot, 'poop');
firstBST.postorder(fbstRoot, 'poop');
ogArr.push(115);
ogArr.push(123);
let isBalancedBool2 = firstBST.isBalanced(fbstRoot);
console.log(isBalancedBool2);
firstBST.rebalance();
let isBalancedBool3 = firstBST.isBalanced(fbstRoot);
console.log(isBalancedBool3);
firstBST.levelOrder(fbstRoot, 'poop');
firstBST.preorder(fbstRoot, 'poop');
firstBST.inorder(fbstRoot, 'poop');
firstBST.postorder(fbstRoot, 'poop');

function createArr() {
    let arr = [];
    for (let i = 0; i < 15; i++) {
        arr.push(Math.random() * 100);
    }
    return arr;
}