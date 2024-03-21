n = int(input())
l = [int(i) for i in input().split()]
print(sum(x > y for x, y in zip(l[1:], l)))