n = int(input())
l = [int(i) for i in input().split()]
print(['NO', 'YES'][any([[0, 1][x < 0] == [0, 1][y < 0] for x, y in zip(l, l[1:])])])
