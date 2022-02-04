def factIterative(num):
    res = 1
    for digit in range(2, num + 1):
        res = res * digit
    return res

print(factIterative(3))