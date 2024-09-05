function iterativeFib(n) {
    let fibArr = [];
    switch (n) {
        case 0:
            return "uuu what!?!?!?";
        case 1:
            fibArr.push(0);
            return fibArr;
        case 2:
            fibArr = [0, 1];
            return fibArr;
        default:
            fibArr = [0, 1];
            for (let i = 3; i <= n; i++) {
                fibArr.push(fibArr[i - 3] + fibArr[i - 2]);
            }
            return fibArr;
    }//end switch

}

let finalArr = iterativeFib(8);

for (let i = 0; i < finalArr.length; i++) {
    console.log(finalArr[i]);
}