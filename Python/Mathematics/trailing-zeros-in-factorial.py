def countTrailingZerosOfFactorial(number):
    res = 0

    i = 5
    while (i <= number):
        res = res + ((number - number % i) / i)
        i = i * 5
    return res

print(countTrailingZerosOfFactorial(251))