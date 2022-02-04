function countDigitsJs(x) {
    let res = 0;
    while(x > 0) {
        x = (x - x % 10) / 10;;
        res++;
    }
    return res;
}

console.log(countDigitsJs(123));