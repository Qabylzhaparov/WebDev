def xor(x, y):
    if x != y:
        return 1
    else:
        return 0
x, y = map(int, input().split())
print(xor(x, y))