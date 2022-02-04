function isPalindromeTS(num: number): string {
    let rev = 0;
    let temp = num;

    while(temp != 0) {
        let ld = temp % 10;
        rev = rev * 10 + ld;
        temp = (temp - temp % 10) / 10;
    }

    if (rev == num) {
        return num + " is Palindrome!";
    } else {
        return num + " is not Palindrome!";
    }
}

console.log(isPalindromeTS(123454321) + "\n");
console.log(isPalindromeTS(1231) + "\n");