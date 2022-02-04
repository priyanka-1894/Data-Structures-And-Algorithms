def factRecursive(num):
    if(num==0):
        return 1
    return num * factRecursive(num - 1)

print(factRecursive(5))