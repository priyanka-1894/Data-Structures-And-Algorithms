def countDigits(x):
    res = 0
    while(x > 0):
        x = (x - x % 10) / 10
        res = res + 1
    return res

print(countDigits(124356))