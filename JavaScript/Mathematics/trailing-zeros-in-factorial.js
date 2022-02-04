function countTrailingZerosOfFactorialJS(number) {
    let res = 0;
    for(let i = 5; i <= number; i = i * 5) {
        res = res + ((number - number % i) / i);
    }
    return res;
}

console.log(countTrailingZerosOfFactorialTS(251));