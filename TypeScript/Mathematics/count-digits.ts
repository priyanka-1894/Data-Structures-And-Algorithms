function countDigitsTs(x: number): number {
    let res: number = 0;
    while(x > 0) {
        x = (x - x % 10) / 10;;
        res++;
    }
    return res;
}

console.log(countDigitsTs(123));