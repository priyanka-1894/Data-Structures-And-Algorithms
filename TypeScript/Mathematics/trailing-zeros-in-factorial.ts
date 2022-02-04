function countTrailingZerosOfFactorialTS(number: number): number {
    let res: number = 0;
    for(let i: number = 5; i <= number; i = i * 5) {
        res = res + ((number - number % i) / i);
    }
    return res;
}

console.log(countTrailingZerosOfFactorialTS(251));