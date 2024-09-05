function recurFib(n) {
    if (n == 0) {
        return [0];
    } else if (n == 1) {
        return [1];
    } else if (n == 2) {
        return [0, 1];
    } else {
        let next = recurFib(n - 1);
        next.push(next[next.length - 2] + next[next.length - 1]);
        return next;
    }
}

let finalRecurArr = recurFib(10);

for (let i = 0; i < finalRecurArr.length; i++) {
    console.log(finalRecurArr[i]);
}