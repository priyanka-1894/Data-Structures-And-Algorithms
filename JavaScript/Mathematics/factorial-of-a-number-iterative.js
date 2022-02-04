function factIterativeJS(num) {
    let res = 1;

    for(let i=2; i<=num; i++) {
        res = res * i;
    }
    return res;
}

console.log(factIterativeJS(3));