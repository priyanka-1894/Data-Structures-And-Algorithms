function isPalindromeJS(number) {
    let rev = 0;
    let temp = number;

    while(temp != 0) {
        let ld = temp % 10;
        rev = rev * 10 + ld;
        temp = (temp - temp % 10) / 10;
    }

    if (rev == number) {
        return number + " is Palindrome!";
    } else {
        return number + " is not Palindrome!";
    }
}

console.log(isPalindromeJS(123454321) + "\n");
console.log(isPalindromeJS(1231) + "\n");