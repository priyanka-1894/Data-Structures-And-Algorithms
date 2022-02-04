def isPalindromeTS(num):
    rev = 0
    temp = num

    while(temp != 0):
        ld = temp % 10
        rev = rev * 10 + ld
        temp = (temp - temp % 10) / 10

    if(rev == num):
        return f"{num} + is Palindrome!"
    else:
        return f"{num} + is not Palindrome!"

print(isPalindromeTS(123454321) + "\n")
print(isPalindromeTS(1231) + "\n")