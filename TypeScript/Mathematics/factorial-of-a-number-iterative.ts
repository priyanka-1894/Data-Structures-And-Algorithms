function factIterativeTS(num: number): number {
    let res: number = 1;

    for(let i: number = 2; i<=num; i++) {
        res = res * i;
    }
    return res;
}

console.log(factIterativeTS(3));